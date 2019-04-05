import { Chatroom } from './../models/chatroom';
import { UserStoreService } from 'src/app/services/user-store.service';
import { IdResponse } from '../models/idResponse';
import { combineLatest, Observable, of } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  // TODO change if using over web

  private apiUrl2 = 'http://localhost:5000/livechattandem/us-central1/chatrooms';
  // private apiUrl2 = 'https://us-central1-livechattandem.cloudfunctions.net/chatrooms';
  private headers: Headers = new Headers();

  constructor(
    private authService: AuthService,
    private angularFirestore: AngularFirestore,
    private http: HttpClient,
    private userStoreService: UserStoreService
  ) {
    this.headers.append('Content-Type', 'application/json');
  }

  // Create a new chatroom by calling the corresponding endpoint.
  create(userA, userB) {
    const data = {
      userA,
      userB,
      updated: Date.now(),
      messages: []
    };
    return this.http.post<IdResponse>(`${this.apiUrl2}`, data);
  }

  // Send a message to the Cloud Firestore database by valling the corresponding endpoint.
  sendMessage(chatroomId, content) {
    const uid = this.authService.currentUserID;
    const data = {
      uid,
      content,
      createdAt: Date.now()
    };
    return this.http.put(`${this.apiUrl2}/${chatroomId}`, data);
  }

  // Get all chatrooms of the current user and return it as an observable array with realtime changes.
  getAllChatrooms() {
    const resultA = this.queryChatrooms('userA');

    const resultB = this.queryChatrooms('userB');

    return combineLatest(resultA, resultB).pipe(
      map(([users, otherUsers]) => users.concat(otherUsers)));
  }

  getAllChatroomsAsUserA() {
    return this.authService.user$.pipe(
      switchMap(user => {
        return this.angularFirestore
          .collection('chatrooms', ref => ref.where('userA', '==', user ? user.uid : ''))
          .snapshotChanges()
          .pipe(
            map(actions => {
              return actions.map(a => {
                const data = a.payload.doc.data() as Chatroom;
                const id = a.payload.doc.id;
                return { id, ...data };
              });
            })
          );
      }),
      switchMap(chatrooms => {
        return combineLatest(chatrooms.map(chatroom => {
          return this.userStoreService.getUserById(chatroom.userB).pipe(
            map(user => {
              return { ...chatroom, ...user };
            })
          );
        }));
      })
    );
  }

  getAllChatroomsAsUserB() {
    return this.authService.user$.pipe(
      switchMap(user => {
        return this.angularFirestore
          .collection('chatrooms', ref => ref.where('userB', '==', user ? user.uid : ''))
          .snapshotChanges()
          .pipe(
            map(actions => {
              return actions.map(a => {
                const data = a.payload.doc.data() as Chatroom;
                const id = a.payload.doc.id;
                return { id, ...data };
              });
            })
          );
      }),
      switchMap(chatrooms => {
        return combineLatest(chatrooms.map(chatroom => {
          return this.userStoreService.getUserById(chatroom.userA).pipe(
            map(user => {
              return { ...chatroom, ...user };
            })
          );
        }));
      })
    );
  }

  // Query chatrooms by field name.
  private queryChatrooms(fieldName) {
    return this.authService.user$.pipe(
      switchMap(user => {
        return this.angularFirestore
          .collection('chatrooms', ref => ref.where(fieldName, '==', user ? user.uid : ''))
          .snapshotChanges()
          .pipe(
            map(actions => {
              return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return { id, ...data };
              });
            })
          );
      })
    );
  }

  // Get an chatroom by it's doc-id and return it as an observable with realtime changes.
  getChatroomById(chatroomId: string) {
    return this.angularFirestore
      .collection<any>(`chatrooms`)
      .doc(chatroomId)
      .snapshotChanges()
      .pipe(
        map(doc => {
          return { id: doc.payload.id, ...doc.payload.data() };
        })
      );
  }

  // Get the corresponding user to every message as an observable with realtime changes.
  joinUsers(chat$: Observable<any>) {
    let chat;
    const joinKeys = {};

    return chat$.pipe(
      switchMap(c => {
        // Unique User IDs
        chat = c;
        const uids = Array.from(new Set(c.messages.map(value => value.uid)));
        // Firestore User Doc Reads
        const userDocs = uids.map(u =>
          this.angularFirestore.doc(`users/${u}`).valueChanges()
        );

        return userDocs.length ? combineLatest(userDocs) : of([]);
      }),
      map(array => {
        array.forEach(v => (joinKeys[(v as any).uid] = v));
        chat.messages = chat.messages.map(v => {
          return { ...v, user: joinKeys[v.uid] };
        });

        return chat;
      })
    );
  }

  deleteChatroom(chatroomId: string) {
    return this.http.delete(`${this.apiUrl2}/${chatroomId}`);
  }

}

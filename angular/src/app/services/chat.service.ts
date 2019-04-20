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

  // private apiUrl = 'http://localhost:5000/tandemfirebase/us-central1/chatrooms';
  private apiUrl = 'https://us-central1-tandemfirebase.cloudfunctions.net/chatrooms';
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
    return this.http.post<IdResponse>(`${this.apiUrl}`, data);
  }

  // Send a message to the Cloud Firestore database by calling the corresponding endpoint.
  sendMessage(chatroomId, content) {
    const uid = this.authService.currentUserID;
    const data = {
      uid,
      content,
      createdAt: Date.now()
    };
    return this.http.put(`${this.apiUrl}/${chatroomId}`, data);
  }

  // get all chatrooms where the current user is equal to userA
  getAllChatroomsAsUserA() {
    return this.angularFirestore
      .collection('chatrooms', ref => ref.where('userA', '==', this.authService.user$ ? this.authService.currentUserID : ''))
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as Chatroom;
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        }),
        switchMap(chatrooms => {
          return combineLatest(chatrooms.map(chatroom => {
            return this.userStoreService.getUserById(chatroom.userB).pipe(
              map(userChatPartner => {
                return { ...chatroom, ...userChatPartner };
              })
            );
          }));
        })
      );
  }

  // get all chatrooms where the current user is equal to userB
  getAllChatroomsAsUserB() {
    return this.angularFirestore
      .collection('chatrooms', ref => ref.where('userB', '==', this.authService.user$ ? this.authService.currentUserID : ''))
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as Chatroom;
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        }),
        switchMap(chatrooms => {
          return combineLatest(chatrooms.map(chatroom => {
            return this.userStoreService.getUserById(chatroom.userA).pipe(
              map(userChatPartner => {
                return { ...chatroom, ...userChatPartner };
              })
            );
          }));
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

  // delete chatroom with given chatroomId
  deleteChatroom(chatroomId: string) {
    return this.http.delete(`${this.apiUrl}/${chatroomId}`);
  }

}

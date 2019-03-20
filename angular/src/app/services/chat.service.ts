import { ChatroomResponse } from './../models/chatroomResponse';
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
  private apiUrl = 'https://us-central1-livechattandem.cloudfunctions.net/chatrooms';
  private apiUrl2 = 'http://localhost:5000/livechattandem/us-central1/chatrooms';
  private headers: Headers = new Headers();

  // TODO check if public or private
  constructor(
    private authService: AuthService,
    private angularFirestore: AngularFirestore,
    private http: HttpClient,
  ) {
    this.headers.append('Content-Type', 'application/json');
  }

  // Create a new chatroom by calling the corresponding endpoint.
  create(userA, userB) {
    const data = {
      userA,
      userB,
      createdAt: Date.now(),
      messages: []
    };
    return this.http.post<ChatroomResponse>(`${this.apiUrl2}`, data);
  }


  // async sendMessage(chatroomId, content) {
  //   console.log(chatroomId);
  //   console.log(content);
  //   const { uid } = await this.authService.getUser();
  //   console.log(uid);
  //   const data = {
  //     uid,
  //     content,
  //     createdAt: Date.now()
  //   };
  //   console.log(data);
  //   return this.http.put(`${this.apiUrl2}/${chatroomId}`, data);
  // }

  sendMessage(chatroomId, content) {
    console.log(chatroomId);
    console.log(content);
    const uid = this.authService.currentUserID;
    console.log(uid);
    const data = {
      uid,
      content,
      createdAt: Date.now()
    };
    console.log(data);
    console.log(`${this.apiUrl2}/${chatroomId}`);
    return this.http.put(`${this.apiUrl2}/${chatroomId}`, data);
  }

  // Get all chatrooms of the current user and return it as an observable array with realtime changes.
  getAllChatrooms() {
    const resultA = this.authService.user$.pipe(
      switchMap(user => {
        return this.angularFirestore
          .collection('chatrooms', ref => ref.where('userA', '==', user ? user.uid : ''))
          .snapshotChanges()
          .pipe(
            map(actions => {
              return actions.map(a => {
                const data: Object = a.payload.doc.data();
                const id = a.payload.doc.id;
                return { id, ...data };
              });
            })
          );
      })
    );

    const resultB = this.authService.user$.pipe(
      switchMap(user => {
        return this.angularFirestore
          .collection('chatrooms', ref => ref.where('userB', '==', user ? user.uid : ''))
          .snapshotChanges()
          .pipe(
            map(actions => {
              return actions.map(a => {
                const data: Object = a.payload.doc.data();
                const id = a.payload.doc.id;
                return { id, ...data };
              });
            })
          );
      })
    );

    return combineLatest(resultA, resultB).pipe(
      map(([users, otherUsers]) => users.concat(otherUsers)));
  }

  // Get an chatroom by his doc-id and return it as an observable with realtime changes.
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
        array.forEach(value => (joinKeys[(value as any).uid] = value));
        chat.messages = chat.messages.map(v => {
          return { ...v, user: joinKeys[v.uid] };
        });

        return chat;
      })
    );
  }

}

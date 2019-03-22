import { AngularFirestore } from '@angular/fire/firestore';
import { Match } from './../models/match';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { switchMap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { combineLatest } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchStoreService {

  private apiUrl = 'http://localhost:5000/livechattandem/us-central1';
  unacceptedMatches: any[];
  allMatchesForSpecificUser: any[];

  constructor(
    private http: HttpClient,
    private angularFirestore: AngularFirestore,
    private authService: AuthService) {
  }

  createMatch(match: Match) {
    return this.http.post(`${this.apiUrl}/matches/`, match);
  }

  getAllUnAcceptedMatches() {
    return this.authService.user$.pipe(
      switchMap(user => {
        return this.angularFirestore
          .collection('matches', ref => ref.where('partnerID', '==', user ? user.uid : '')
            .where('accepted', '==', false))
          .snapshotChanges()
          .pipe(
            map(actions => {
              return actions.map(a => {
                // TODO check if it works without the 'Object'  const data: Object = a.payload.doc.data();
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return { id, ...data };
              });
            })
          );
      })
    );
  }

  getAllAcceptedMatches() {
    const resultA = this.authService.user$.pipe(
      switchMap(user => {
        return this.angularFirestore
          .collection('matches', ref => ref.where('partnerID', '==', user ? user.uid : '')
          .where('accepted', '==', true))
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

    const resultB = this.authService.user$.pipe(
      switchMap(user => {
        return this.angularFirestore
          .collection('matches', ref => ref.where('initiatorID', '==', user ? user.uid : '')
          .where('accepted', '==', true))
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

    return combineLatest(resultA, resultB).pipe(
      map(([users, otherUsers]) => users.concat(otherUsers)));
  }

  getAllMatchrequests() {
    return this.authService.user$.pipe(
      switchMap(user => {
        return this.angularFirestore
          .collection('matches', ref => ref.where('initiatorID', '==', user ? user.uid : '')
            .where('accepted', '==', false))
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

  updateMatch(id: string, data: any) {
    // TOD: add functionality
  }

  deleteMatch(matchId: string) {
    // TOD: add functionality
  }
}

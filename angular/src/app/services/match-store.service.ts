import { UserStoreService } from 'src/app/services/user-store.service';
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

  // private apiUrl = 'http://localhost:5000/tandemfirebase/us-central1';
  private apiUrl = 'https://us-central1-tandemfirebase.cloudfunctions.net';

  constructor(
    private http: HttpClient,
    private angularFirestore: AngularFirestore,
    private authService: AuthService,
    private userStoreService: UserStoreService) {
  }

  // create match with given properties
  createMatch(match: Match) {
    return this.http.post(`${this.apiUrl}/matches/`, match);
  }

  // get all matches where the current user is equal to initiatorID and all matches where the current user is equal to partnerID
  getAllMatches() {
    const resultA = this.queryAllMatches('initiatorID');
    const resultB = this.queryAllMatches('partnerID');

    return combineLatest(resultA, resultB).pipe(
      map(([users, otherUsers]) => users.concat(otherUsers)));
  }

  // get all unaccepted matches where the current user is equal to partnerID
  getAllUnAcceptedMatches() {
    return this.angularFirestore
      .collection('matches', ref => ref.where('partnerID', '==', this.authService.user$ ? this.authService.currentUserID : '')
        .where('accepted', '==', false))
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as Match;
            const matchId = a.payload.doc.id;
            return { matchId, ...data };
          });
        }),
        switchMap(matches => {
          return combineLatest(matches.map(match => {
            return this.userStoreService.getUserById(match.initiatorID).pipe(
              map(user => {
                return { ...match, ...user };
              })
            );
          }));
        })
      );
  }

  // get all accepted macthes where the current user is equal to initiatorID
  getAllAcceptedMatchesAsInitiator() {
    return this.angularFirestore
      .collection('matches', ref => ref.where('initiatorID', '==', this.authService.user$ ? this.authService.currentUserID : '')
        .where('accepted', '==', true))
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as Match;
            const matchId = a.payload.doc.id;
            return { matchId, ...data };
          });
        }),
        switchMap(matches => {
          return combineLatest(matches.map(match => {
            return this.userStoreService.getUserById(match.partnerID).pipe(
              map(userMatch => {
                return { ...match, ...userMatch };
              })
            );
          }));
        })
      );
  }

  // get all accepted macthes where the current user is equal to partnerID
  getAllAcceptedMatchesAsPartner() {
    return this.angularFirestore
      .collection('matches', ref => ref.where('partnerID', '==', this.authService.user$ ? this.authService.currentUserID : '')
        .where('accepted', '==', true))
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as Match;
            const matchId = a.payload.doc.id;
            return { matchId, ...data };
          });
        }),
        switchMap(matches => {
          return combineLatest(matches.map(match => {
            return this.userStoreService.getUserById(match.initiatorID).pipe(
              map(userMatch => {
                return { ...match, ...userMatch };
              })
            );
          }));
        })
      );
  }

  // get all mactherequests where the current user is equal to initiatorID
  getAllMatchrequests() {
    return this.angularFirestore
      .collection('matches', ref => ref.where('initiatorID', '==', this.authService.user$ ? this.authService.currentUserID : '')
        .where('accepted', '==', false))
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as Match;
            const matchId = a.payload.doc.id;
            return { matchId, ...data };
          });
        }),
        switchMap(matches => {
          return combineLatest(matches.map(match => {
            return this.userStoreService.getUserById(match.partnerID).pipe(
              map(userMatch => {
                return { ...match, ...userMatch };
              })
            );
          }));
        })
      );
  }

  // get all macthes where the current user is equal to the value of filedNameOfRole
  private queryAllMatches(fieldNameOfRole) {
        return this.angularFirestore
          .collection('matches', ref => ref.where(fieldNameOfRole, '==', this.authService.user$ ? this.authService.currentUserID : ''))
          .snapshotChanges()
          .pipe(
            map(actions => {
              return actions.map(a => {
                const data = a.payload.doc.data() as Match;
                const matchId = a.payload.doc.id;
                return { matchId, ...data };
              });
            })
          );
  }

  // update match with the given matchId
  updateMatch(matchId: string, data: any) {
    return this.http.put(`${this.apiUrl}/matches/${matchId}`, data);
  }

  // delete match with the given matchId
  deleteMatch(matchId: string) {
    return this.http.delete(`${this.apiUrl}/matches/${matchId}`);
  }
}

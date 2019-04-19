import { UserStoreService } from 'src/app/services/user-store.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Match } from './../models/match';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { switchMap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { combineLatest, forkJoin, of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchStoreService {

  private apiUrl = 'http://localhost:5000/tandemfirebase/us-central1';
  // private apiUrl = 'https://us-central1-tandemfirebase.cloudfunctions.net';

  constructor(
    private http: HttpClient,
    private angularFirestore: AngularFirestore,
    private authService: AuthService,
    private userStoreService: UserStoreService) {
  }

  createMatch(match: Match) {
    return this.http.post(`${this.apiUrl}/matches/`, match);
  }

  getAllMatches() {
    const resultA = this.queryAllMatches('initiatorID');
    const resultB = this.queryAllMatches('partnerID');

    return combineLatest(resultA, resultB).pipe(
      map(([users, otherUsers]) => users.concat(otherUsers)));
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
                const data = a.payload.doc.data() as Match;
                const matchId = a.payload.doc.id;
                return { matchId, ...data };
              });
            })
          );
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

  // getAllAcceptedMatchesAsInitiator() {
  //   return this.authService.user$.pipe(
  //     switchMap(user => {
  //       return this.angularFirestore
  //         .collection('matches', ref => ref.where('initiatorID', '==', user ? user.uid : '')
  //           .where('accepted', '==', true))
  //         .snapshotChanges()
  //         .pipe(
  //           map(actions => {
  //             return actions.map(a => {
  //               const data = a.payload.doc.data() as Match;
  //               const matchId = a.payload.doc.id;
  //               return { matchId, ...data };
  //             });
  //           })
  //         );
  //     }),
  //     switchMap(matches => {
  //       return combineLatest(matches.map(match => {
  //         return this.userStoreService.getUserById(match.partnerID).pipe(
  //           map(user => {
  //             return { ...match, ...user };
  //           })
  //         );
  //       }));
  //     })
  //   );
  // }

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

  // getAllAcceptedMatchesAsPartner() {
  //   return this.authService.user$.pipe(
  //     switchMap(user => {
  //       return this.angularFirestore
  //         .collection('matches', ref => ref.where('partnerID', '==', user ? user.uid : '')
  //           .where('accepted', '==', true))
  //         .snapshotChanges()
  //         .pipe(
  //           map(actions => {
  //             return actions.map(a => {
  //               const data = a.payload.doc.data() as Match;
  //               const matchId = a.payload.doc.id;
  //               return { matchId, ...data };
  //             });
  //           })
  //         );
  //     }),
  //     mergeMap(matches => {
  //       return combineLatest(matches.map(match => {
  //         return this.userStoreService.getUserById(match.initiatorID).pipe(
  //           map(user => {
  //             return { ...match, ...user };
  //           })
  //         );
  //       }));
  //     })
  //   );
  // }

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

  // TODO change user.uid to currentUserID
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
                const data = a.payload.doc.data() as Match;
                const matchId = a.payload.doc.id;
                return { matchId, ...data };
              });
            })
          );
      }),
      switchMap(matches => {
        return combineLatest(matches.map(match => {
          return this.userStoreService.getUserById(match.partnerID).pipe(
            map(user => {
              return { ...match, ...user };
            })
          );
        }));
      })
    );
  }

  private queryAllMatches(fieldNameOfRole) {
    return this.authService.user$.pipe(
      switchMap(user => {
        return this.angularFirestore
          .collection('matches', ref => ref.where(fieldNameOfRole, '==', user ? user.uid : ''))
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
      })
    );
  }

  updateMatch(matchId: string, data: any) {
    return this.http.put(`${this.apiUrl}/matches/${matchId}`, data);
  }

  deleteMatch(matchId: string) {
    return this.http.delete(`${this.apiUrl}/matches/${matchId}`);
  }
}

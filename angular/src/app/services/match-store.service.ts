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

  // private apiUrl = 'http://localhost:5000/livechattandem/us-central1';
  private apiUrl = 'https://us-central1-livechattandem.cloudfunctions.net';


  constructor(
    private http: HttpClient,
    private angularFirestore: AngularFirestore,
    private authService: AuthService,
    private userStoreService: UserStoreService) {
  }

  createMatch(match: Match) {
    return this.http.post(`${this.apiUrl}/matches/`, match);
  }

  getAllUnAcceptedMatches() {
    return this.queryMatches('partnerID', false);
  }

  getAllAcceptedMatches() {
    const resultA = this.queryMatches('partnerID', true);
    const resultB = this.queryMatches('initiatorID', true);

    return combineLatest(resultA, resultB).pipe(
      map(([users, otherUsers]) => users.concat(otherUsers)));
  }

  getAllMatchrequests() {
    return this.queryMatches('initiatorID', false);
  }

  private queryMatches(fieldNameOfRole, boolValueOfAccepted) {
    return this.authService.user$.pipe(
      switchMap(user => {
        return this.angularFirestore
          .collection('matches', ref => ref.where(fieldNameOfRole, '==', user ? user.uid : '')
            .where('accepted', '==', boolValueOfAccepted))
          .snapshotChanges()
          .pipe(
            map(actions => {
              return actions.map(a => {
                const data = a.payload.doc.data() as Match;
                const id = a.payload.doc.id;
                return { id, ...data };
              });
            })
          );
      }),
      // map(matches => {
      //   return matches.map(match => {
      //     return this.userStoreService.getUserById(match.partnerID).pipe(
      //       map(user => {
      //         return { ...match, ...user };
      //       })
      //     );
      //   });
      // })
    );
  }

  updateMatch(matchId: string, data: any) {
    return this.http.put(`${this.apiUrl}/matches/${matchId}`, data);
  }

  deleteMatch(matchId: string) {
    return this.http.delete(`${this.apiUrl}/matches/${matchId}`);
  }
}

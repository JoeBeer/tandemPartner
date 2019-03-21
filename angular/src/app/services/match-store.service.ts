import { AngularFirestore } from '@angular/fire/firestore';
import { Match } from './../models/match';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { switchMap, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MatchStoreService {

  unacceptedMatches: Match[];
  constructor(
    private authService: AuthService,
    private angularFirestore: AngularFirestore
  ) {
    this.unacceptedMatches = [
      new Match(
      'kycsoFi1RPaNy3hJxwmFhbD032I3',
      'xMFp4LlYHPXZ3ntVWvRsq0cwzl02',
      0),
      new Match(
      'a5WsJoGC2kbu0zto57mP',
      'xMFp4LlYHPXZ3ntVWvRsq0cwzl02',
      0)
    ];
   }

  getAllUnacceptedMatchesForUser(id: string) {
    return this.unacceptedMatches;
  }

  getAllUnAcceptedMatches() {
    return this.authService.user$.pipe(
      switchMap(user => {
        return this.angularFirestore
        .collection('machtes', ref => ref.where('partnerID', '==', user ? user.uid : ''))
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
  }

  getAllAcceptedMatches() {

  }

  updateMatch(id: string, data: any) {
  // TOD: add functionality
  }
}

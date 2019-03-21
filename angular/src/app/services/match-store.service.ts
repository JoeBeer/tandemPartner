import { Match } from './../models/match';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class MatchStoreService {

  unacceptedMatches: any[];
  allMatchesForSpecificUser: any[];

  constructor(private angularFireStore: AngularFirestore) {
 this.allMatchesForSpecificUser = [
   new Match(
   'kycsoFi1RPaNy3hJxwmFhbD032I3',
   'xMFp4LlYHPXZ3ntVWvRsq0cwzl02',
   'kochen',
   false),
   new Match(
   'a5WsJoGC2kbu0zto57mP',
   'xMFp4LlYHPXZ3ntVWvRsq0cwzl02',
   'schwimmen',
   false)
 ];
   }

  async getAllUnacceptedMatchesForUser(id: string) {
    try {
        await this.angularFireStore.collection('matches').ref.where('partnerID', '==', id)
        .get().then( snapshot => {
          snapshot.docs.forEach( doc => {
            this.unacceptedMatches.push(doc.data());
          });
        });
        return this.unacceptedMatches;
    } catch (error) {
      console.log('Error getting unaccepted matches', error);
  }
  }

  async getAllMatchesForSpecificUser(id: string) {
    // get alle matches where initiatorID=currentUser.uid
    try {
      await this.angularFireStore.collection<Match>('matches').ref.where('initiatorID', '==', id)
      .get().then(snapshot => {
        snapshot.docs.forEach(doc => {
          this.allMatchesForSpecificUser.push(doc.data() as Match);
        });
      });
    } catch (error) {
      console.log('Error getting  matches where initiatorID = UID', error);

    }

    // get all matches where patnerID=currentUser.uid and accepted=true
    try {
      await this.angularFireStore.collection<Match>('matches').ref.where('partnerID', '==', id).where('accepted', '==', true)
      .get().then( snapshot => {
        snapshot.docs.forEach(doc => {
          this.allMatchesForSpecificUser.push(doc.data() as Match);
        });
      });
      } catch (error) {
        console.log('Error getting accepted matches where partnerID = UID', error);
      }

    return this.allMatchesForSpecificUser;

  }

  updateMatch(id: string, data: any) {
  // TOD: add functionality
  }

  deleteMatch(matchId: string) {
  // TOD: add functionality
  }
}

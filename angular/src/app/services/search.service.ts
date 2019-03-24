import { MatchStoreService } from './match-store.service';
import { Searchrequest } from './../models/searchrequest';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { collection } from 'rxfire/firestore';
import { map, switchMap, filter } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { User } from '../models/user';
import { IdResponse } from '../models/idResponse';
import { combineLatest } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private apiUrl = 'http://localhost:5000/livechattandem/us-central1';
  private headers: Headers = new Headers();

  constructor(
    private http: HttpClient,
    private angularFirestore: AngularFirestore,
    private authService: AuthService,
    private matchStoreService: MatchStoreService
  ) {
    this.headers.append('Content-Type', 'application/json');
  }

  createSearchrequest(searchdata: any) {
    return this.http.post<IdResponse>(`${this.apiUrl}/searches/`, searchdata);
  }

  getRecentSearchRequests() {
    return this.angularFirestore
      .collection(`users/${this.authService.currentUserID}/searches`)
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
  }

  getSearchRequestById(searchRequestId) {
    return this.angularFirestore
      .collection<any>('users')
      .doc<User>(this.authService.currentUserID)
      .collection('searches')
      .doc<Searchrequest>(searchRequestId).valueChanges();
  }

  getSearchResult(searchRequest: Searchrequest) {
    return this.authService.user$.pipe(
      switchMap(user => {
        return this.angularFirestore
          .collection<any>('users', ref => ref.where('offers', 'array-contains', searchRequest.offerParam)
            .where('city', '==', searchRequest.cityParam)
            .where('sex', '==', searchRequest.sexParam))
          .snapshotChanges()
          .pipe(
            map(actions => {
              return actions.map(a => {
                const data = a.payload.doc.data() as User;
                // const id = a.payload.doc.id;
                // return { id, ...data };
                return { ...data };
              });
            })
          );
      }
      )
    );
  }

  getUsersToBeExcludedArray() {
    const UsersToBeExcludedId: string[] = [];

    this.matchStoreService.getAllAcceptedMatches().subscribe(matches => {
      matches.map(match => {
        if (UsersToBeExcludedId.includes(match.initiatorID) === false) {
          UsersToBeExcludedId.push(match.initiatorID);
        }
        if (UsersToBeExcludedId.includes(match.partnerID) === false) {
          UsersToBeExcludedId.push(match.partnerID);
        }
      });
    });

    this.matchStoreService.getAllUnAcceptedMatches().subscribe(matches => {
      matches.map(match => {
        if (UsersToBeExcludedId.includes(match.initiatorID) === false) {
          UsersToBeExcludedId.push(match.initiatorID);
        }
        if (UsersToBeExcludedId.includes(match.partnerID) === false) {
          UsersToBeExcludedId.push(match.partnerID);
        }
      });
    });

    this.matchStoreService.getAllMatchrequests().subscribe(matches => {
      matches.map(match => {
        if (UsersToBeExcludedId.includes(match.initiatorID) === false) {
          UsersToBeExcludedId.push(match.initiatorID);
        }
        if (UsersToBeExcludedId.includes(match.partnerID) === false) {
          UsersToBeExcludedId.push(match.partnerID);
        }
      });
    });

    return UsersToBeExcludedId;
  }
}

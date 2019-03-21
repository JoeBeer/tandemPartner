import { Injectable } from '@angular/core';
import { Searchrequest } from '../models/searchrequest';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { collection } from 'rxfire/firestore';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  recentSearchrequests: Searchrequest[] = [
    new Searchrequest( 18, 40, 'both', 'kochen'),
    new Searchrequest( 19, 20, 'female', 'schwimmen'),
    new Searchrequest( 20, 30, 'male', 'rudern')
  ];

  private apiUrl = 'https://us-central1-experimentaltandem.cloudfunctions.net';
  private headers: Headers = new Headers();

  constructor(private http: HttpClient, private angularFirestore: AngularFirestore) {
    this.headers.append('Content-Type', 'application/json');
   }

  createSearchrequest(userId: string, searchdata: any) {
    return this.http.post(`${this.apiUrl}/users/${userId}/searches`, searchdata);
  }

  getRecentSearchrequestsForSpecificUser(userId: string) {
   // return this.http.get(`${this.apiUrl}/users/${userId}/searches`);
    const query = this.angularFirestore.collection('users/' + userId + '/searches').ref;
    // use rxfire's collection to create an Observable Response
    return collection(query).pipe(map(docs => docs.map(doc => doc.data())));
  }

  takeExistingSearchrequest(userId: string, searchdata: any) {
    return this.http.post(`${this.apiUrl}/users/${userId}/searches`, searchdata);
  }
}

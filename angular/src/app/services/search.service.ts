import { Searchrequest } from './../models/searchrequest';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { collection } from 'rxfire/firestore';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  // recentSearchrequests: Searchrequest[] = [
  //   new Searchrequest( 18, 40, 'both', 'kochen'),
  //   new Searchrequest( 19, 20, 'female', 'schwimmen'),
  //   new Searchrequest( 20, 30, 'male', 'rudern')
  // ];

  private apiUrl = 'http://localhost:5000/livechattandem/us-central1';
  private headers: Headers = new Headers();

  constructor(
    private http: HttpClient,
    private angularFirestore: AngularFirestore,
    private authService: AuthService) {
    this.headers.append('Content-Type', 'application/json');
   }

  createSearchrequest(userId: string, searchdata: any) {
    return this.http.post<Searchrequest>(`${this.apiUrl}/users/${userId}/searches`, searchdata);
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

  getSearchRequestById(searchRequestId) {
    return this.angularFirestore
    .collection<any>('users')
    .doc<User>(this.authService.currentUserID)
    .collection('searchRequests').doc<Searchrequest>(searchRequestId).get();
  }

}

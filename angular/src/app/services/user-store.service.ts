import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { doc } from 'rxfire/firestore';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  private apiUrl = 'https://us-central1-experimentaltandem.cloudfunctions.net';
  private headers: Headers = new Headers();

  constructor(private http: HttpClient, private angularFirestore: AngularFirestore) {
    this.headers.append('Content-Type', 'application/json');
   }

   // getting the value via rxfire
   getUserById(id: string) {
    const query = this.angularFirestore.doc(`users/${id}`).ref;
    return doc(query);
   }

   createUser(user: any) {
     // generate new API-User
     const data = {
       firstname: user.firstname,
       lastname: user.lastname,
       dateOfBirth: user.dateOfBirth,
       sex: user.sex,
       city: user.city,
       activities: user.activities,
       offers: user.offers,
       mail: user.mail,
       password: user.password
     };

     return this.http.post(`${this.apiUrl}/users/`, data);
   }

   updateUser(id: string, user: any) {
    const data = {
      uid: id,
      firstname: user.firstname,
      lastname: user.lastname,
      dateOfBirth: user.dateOfBirth,
      sex: user.sex,
      city: user.city,
      activities: user.activities,
      offers: user.offers,
      mail: user.mail,
      password: user.password
    };

    return this.http.put(`${this.apiUrl}/users/${id}`, data);
  }

  public deleteUser(id: string) {
    return this.http.delete(`${this.apiUrl}/users/${id}`);
  }

  private errorHandler(error: Error | any) {
    return Observable.throw(error);
  }
}

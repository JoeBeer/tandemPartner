import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  private apiUrl = 'http://localhost:5000/livechattandem/us-central1';
  private headers: Headers = new Headers();

  constructor(
    private http: HttpClient,
    private angularFirestore: AngularFirestore) {
    this.headers.append('Content-Type', 'application/json');
   }

   getAllUsers() {
     return this.http.get(`${this.apiUrl}/users`);
   }


  //  getUserById(id: string) {
  //    return this.http.get<User>(`${this.apiUrl}/users/${id}`);
  //  }

   getUserById(id) {
    return this.angularFirestore
    .collection<any>(`users`)
    .doc<User>(id).valueChanges();
   }

  //  createUser(id: string, user: User) {
  //    // generate new API-User
  //    const data = {
  //      uid: id,
  //      firstname: user.firstname,
  //      lastname: user.lastname,
  //      city: user.city,
  //      dateOfBirth: user.dateOfBirth,
  //      activities: user.activities,
  //      sex: user.sex
  //    };

  //    return this.http.put(`${this.apiUrl}/users`, data);
  //  }

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

   updateUser(id: any, user: User) {
    const data = {
      firstname: user.firstname,
      lastname: user.lastname,
      city: user.city,
      dateOfBirth: user.dateOfBirth,
      activities: user.activities,
      sex: user.sex
    };

    return this.http.put(`${this.apiUrl}/users/${id}`, data);
  }

  public deleteUser(id: any) {
    return this.http.delete(`${this.apiUrl}/users/${id}`);
  }

  private errorHandler(error: Error | any) {
    return Observable.throw(error);
  }
}

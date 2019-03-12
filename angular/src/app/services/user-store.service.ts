import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  private apiUrl = 'https://us-central1-experimentaltandem.cloudfunctions.net';
  private headers: Headers = new Headers();

  constructor(private http: HttpClient) {
    this.headers.append('Content-Type', 'application/json');
   }

   getAllUsers() {
     return this.http.get(`${this.apiUrl}/users`);
   }


   getUserById(id: string) {
     return this.http.get(`${this.apiUrl}/users/${id}`);
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

     return this.http.post(`${this.apiUrl}/users`, data);
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

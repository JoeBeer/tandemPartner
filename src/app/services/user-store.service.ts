import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  private apiUrl = 'https://us-central1-experimentaltandem.cloudfunctions.net/app';
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

   createUser(id: string, user: User) {
     // generate new API-User
     const data = {
       uid: id,
       firstname: user.firstname,
       lastname: user.lastname,
       mail: user.mail
     };

     return this.http.put(`${this.apiUrl}/users`, data);
   }

   updateUser(id: any, user: User) {
    const data = {
      firstname: user.firstname,
      lastname: user.lastname,
      mail: user.mail
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

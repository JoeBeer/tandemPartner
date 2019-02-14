import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  private apiUrl = 'http://127.0.0.1:3000';
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

   insertUser(user: User) {
     // generate new API-User
     const data = {
       firstname: user.firstname,
       lastname: user.lastname,
       mail: user.mail
     };

     return this.http.post(`${this.apiUrl}/users`, data);
   }

   updateUser(id: any, user: User) {
    const data = {
      firstname: user.firstname,
      lastname: user.lastname,
      mail: user.mail
    };

     return this.http.post(`${this.apiUrl}/users/${id}`, data);
  }

  public deleteUser(id: any) {
    return this.http.delete(`${this.apiUrl}/users/${id}`);
  }
}

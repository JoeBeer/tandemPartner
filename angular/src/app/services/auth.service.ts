import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<any>;
  currentUserID: string;

  isLoggedIn = false;
  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private angularFirestore: AngularFirestore,
    private router: Router) {

      this.user$ = this.angularFireAuth.authState.pipe(
        switchMap(user => {
          if (user) {
            this.currentUserID = user.uid;
            return this.angularFirestore.doc<any>(`users/${user.uid}`).valueChanges();
          } else {
            return of(null);
          }
        })
      );
  }

  isloggedIn(): boolean {
    const user = this.angularFireAuth.auth.currentUser;
    // console.log(this.user$);
    if (user) {
      return this.isLoggedIn = true;
    } else {
      return this.isLoggedIn = false;
    }
  }

  getUser() {
    return this.user$.pipe(first()).toPromise();
  }

  // isloggedIn(): boolean {
  //   return this.isLoggedIn;
  // }

  async logout() {
    await this.angularFireAuth.auth.signOut();
    this.isLoggedIn = false;
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  signUpWithMailAndPassword(mail: string, password: string) {
    return new Promise<any>((resolve, reject) => {
      this.angularFireAuth.auth.createUserWithEmailAndPassword(mail, password)
        .then(res => {
          this.isLoggedIn = true;
          resolve(res);
        }, error => reject(error));
    });
  }

  async login(mail: string, password: string) {
    try {
      await this.angularFireAuth.auth.signInWithEmailAndPassword(mail, password);
      this.isLoggedIn = true;
      this.router.navigate(['/home']);
    } catch (error) {
      alert('Not able to sign in!' + error.message);
    }
  }
}

import { UserStoreService } from 'src/app/services/user-store.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public firebaseUser: firebase.User = null;
  public currentUser: any;

  isLoggedIn = false;
   // store the URL so we can redirect after logging in
   redirectUrl: string;

  constructor(public angularFireAuth: AngularFireAuth,
              public router: Router,
              private userStoreService: UserStoreService) {
    this.angularFireAuth.authState.subscribe( user => {
      if (user) {
        this.firebaseUser = user;
        localStorage.setItem('user', JSON.stringify(this.currentUser));
      } else {
        localStorage.setItem('user', null);
      }
    });

  }

  getUser() {
    this.userStoreService.getUserById(this.firebaseUser.uid).subscribe( snapshot => {
      this.currentUser = snapshot.data();
    });

    return this.currentUser;
  }

  isloggedIn(): boolean {
    const user = this.angularFireAuth.auth.currentUser;

    if (user) {
      return this.isLoggedIn = true;
    } else {
      return this.isLoggedIn = false;
    }
  }

  logout() {
    this.angularFireAuth.auth.signOut()
    .then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/login']);
    });

  }

  signUpWithMailAndPassword(mail: string, password: string) {
    return new Promise<any>((resolve, reject) => {
      this.angularFireAuth.auth.createUserWithEmailAndPassword(mail, password)
      .then( res => {
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

import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(private angularFireAuth: AngularFireAuth,
              private router: Router) {
    this.user = angularFireAuth.authState;

    this.user.subscribe((user) => {
      if (user) {
        this.userDetails = user;
        console.log('userdetails: ', this.userDetails);
      } else {
        this.userDetails = null;
      }
    });
  }

  isloggedIn() {
    if (this.userDetails == null) {
      return false;
    } else {
      return true;
    }
  }

  logout() {
    this.angularFireAuth.auth.signOut().then((res) => {
      this.router.navigate(['/login']);
    });
  }

  signUpWithMailAndPassword(mail: string, password: string) {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(mail, password);
  }

  signInWithMailAndPassword(mail: string, password: string) {
    const credential = firebase.auth.EmailAuthProvider.credential(mail, password);

    return this.angularFireAuth.auth.signInWithEmailAndPassword(mail, password);
  }
}

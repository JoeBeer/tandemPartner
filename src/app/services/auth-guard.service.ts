import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private authService: AuthService) { }

  canActivate() {
    if ( this.authService.isloggedIn() ) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}

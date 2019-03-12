import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const user = this.authService.getUser();
    if (!user) {
      this.router.navigate(['/']);
    }
    return !!user;
  }
// canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
//   const url: string = state.url;
//   return this.checkLogin(url);
// }
// checkLogin(url: string) {
//   if (this.authService.isloggedIn()) {
//     return true;
//   }
//   // Store the attempted URL for redirecting
//   this.authService.redirectUrl = url;
//
//   this.router.navigate(['/login']);
//   return false;
// }
}

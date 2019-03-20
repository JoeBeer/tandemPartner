import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Promise<boolean> {
    const user = await this.authService.getUser();
    // console.log('Auth Guard');
    // console.log(user);
    if (!user) {
      this.router.navigate(['/']);
    }
    return !!user;
  }
}

import { User } from './../../models/user';
import { UserStoreService } from './../../services/user-store.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  // default value for not showing the page in english
  showEnglish = false;
  currentUserFirstname: string;

  // set Username
  username: string;
  greeting: string;

  constructor(
    private translateService: TranslateService,
    private authService: AuthService,
    private router: Router,
    private userStoreService: UserStoreService) {
    translateService.setDefaultLang('de');
  }


  ngOnInit() {
    this.authService.user$.subscribe(user => {
      try {
        this.currentUserFirstname = user.firstname;
      } catch {
      }
    });
  }

  isLoggedIn() {
    return this.authService.isloggedIn();
  }

  switchLanguage(language: string) {
    this.translateService.use(language);
    if (language === 'en') {
      this.showEnglish = true;
      this.translateService.setDefaultLang('en');
    } else {
      this.showEnglish = false;
      this.translateService.setDefaultLang('de');
    }
  }

  logout() {
    this.authService.logout();
  }

}

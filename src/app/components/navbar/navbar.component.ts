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

  isLoggedIn = false;

  constructor(private translateService: TranslateService,
              private authService: AuthService,
              private router: Router) {
    translateService.setDefaultLang('de');
   }

  ngOnInit() {
    this.isLoggedIn = this.authService.isloggedIn();
  }

  switchLanguage(language: string) {
    this.translateService.use(language);
    if (language === 'en') {
      this.showEnglish = true;
    } else {
      this.showEnglish = false;
    }
  }

  logout() {
// TODO: add functionality
    this.authService.logout();
  }

}

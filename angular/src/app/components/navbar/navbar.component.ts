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

  async ngOnInit() {

    // get Username
    const user = await this.authService.getCurrentUser();
    this.userStoreService.getUserById(user.uid).subscribe((recievedUser: User) => {
      this.username = recievedUser.firstname;
    });
    // random greeting
    this.greeting = this.randomGreeting();
  }

  randomGreeting(): string {
    const arr: string[] = ['Grüß dich', 'Hallo', 'Hi', 'Hey', 'Guten Tag', 'Servus', 'Huhu', 'Willkommen', 'Moin'];
    const randomNumber: number = Math.floor(Math.random() * (arr.length - 1));
    return arr[randomNumber];
  }

  isLoggedIn() {
    return this.authService.isloggedIn();
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
    this.authService.logout();
  }

}

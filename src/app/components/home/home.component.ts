import { Match } from './../../models/match';
import { MatchStoreService } from './../../services/match-store.service';
import { AuthService } from './../../services/auth.service';
import { UserStoreService } from 'src/app/services/user-store.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: User[];
  user: User;
  matchRequests: Match[];
  initiatorFirstname: string;

  constructor(
    private userStoreService: UserStoreService,
    private authService: AuthService,
    private matchStoreService: MatchStoreService
    ) { }

  // when home-component was called, the written methods in ngOnInit gonna start
  ngOnInit() {
    this.showMatchRequestsForCurrentUser(this.authService.currentUser.uid);
  }


  showMatchRequestsForCurrentUser(id: string) {
    this.matchRequests = this.matchStoreService.getAllUnacceptedMatchesForUser(id);
    // this.matchRequests.forEach((i: Match) => {
    //   console.log('PREinitiatorID: ' + i.initiatorID);
    //   this.getInitiatorFirstname(i.initiatorID);
    //   i.initiatorID = this.initiatorFirstname;
    //   console.log('initiatorID: ' + i.initiatorID);
    // });
  }

  getInitiatorFirstname(id: string) {
    this.userStoreService.getUserById(id).subscribe((recievedUser: User) => {
      this.initiatorFirstname = recievedUser.firstname;
      console.log('initiatorFirstname: ' + this.initiatorFirstname);
    });
  }

  acceptMatch() {
    // TODO: add functionality
    console.log('accepted');
  }

  deleteMatch() {
    // TODO: add delete functionality
    console.log('deleted');
  }

}

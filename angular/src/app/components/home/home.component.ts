import { Match } from './../../models/match';
import { MatchStoreService } from './../../services/match-store.service';
import { AuthService } from './../../services/auth.service';
import { UserStoreService } from 'src/app/services/user-store.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: User[];
  user: User;
  requestUser: User;
  matchRequests: any[];
  initiatorFirstname: string;

  openedModal: any;

  // for fontawesome icons
  faCheck = faCheck;
  faTimes = faTimes;

  // for pagination
  pageNumber = 1;

  // for modal
  display = 'none';
  modalIsOpen = false;

  constructor(
    private userStoreService: UserStoreService,
    private authService: AuthService,
    private matchStoreService: MatchStoreService
    ) { }

  // when home-component was called, the written methods in ngOnInit gonna start
  ngOnInit() {
    //this.showMatchRequestsForCurrentUser(this.authService.getUser().uid);
  }


  showMatchRequestsForCurrentUser(id: string) {
    this.matchStoreService.getAllUnacceptedMatchesForUser(id).then(matches => this.matchRequests = matches);
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
    // TODO: add functionality - update the match
    console.log('accepted');
  //  this.showMatchRequestsForCurrentUser(this.authService.currentUser.uid);
  }

  declineMatch() {
    // TODO: add delete functionality - delete the match
    console.log('deleted');
   // this.showMatchRequestsForCurrentUser(this.authService.currentUser.uid);
  }

  openModal(id: string) {
    console.log('id: ' + id);
    this.modalIsOpen = true;
    this.display = 'block';
    this.matchRequests.forEach( match => {
      if (match._id === id) {
        this.openedModal = match;
      }
    });
  }

  closeModal() {
    this.display = 'none';
    this.modalIsOpen = false;
  }

}

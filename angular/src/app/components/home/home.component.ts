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

  matchRequests$;

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
    this.matchRequests$ = this.matchStoreService.getAllUnAcceptedMatches();
  }

  getInitiatorFirstname(id: string) {
    // this.userStoreService.getUserById(id).subscribe((recievedUser: User) => {
    //   this.initiatorFirstname = recievedUser.firstname;
    //   console.log('initiatorFirstname: ' + this.initiatorFirstname);
    // });
  }

  acceptMatch(matchId) {
    const data = {
      accepted: true
    }
    this.matchStoreService.updateMatch(matchId, data)
    .subscribe();
  }

  declineMatch(matchId) {
    this.matchStoreService.deleteMatch(matchId)
    .subscribe();
  }

  openModal(id: string) {
    console.log('id: ' + id);
    this.modalIsOpen = true;
    this.display = 'block';

  }

  closeModal() {
    this.display = 'none';
    this.modalIsOpen = false;
  }

}

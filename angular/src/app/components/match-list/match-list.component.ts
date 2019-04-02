import { UserStoreService } from './../../services/user-store.service';
import { Match } from './../../models/match';
import { MatchStoreService } from './../../services/match-store.service';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { faTrash, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { ChatService } from 'src/app/services/chat.service';
import { User } from './../../models/user';
// import { ChatService } from './../../services/chat.service';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss']
})
export class MatchListComponent implements OnInit {

  matchA: Match[];
  matchB: Match[];
  allMatches: Match[];
  acceptedMatches: Match[];
  matchrequests: Match[];

  matchRequests$: any[] = [];
  acceptedMatchesAsInitiator$: any[] = [];
  acceptedMatchesAsPartner$: any[] = [];

  matchRequestLength: number;

  // for fontawesome icons
  faTrash = faTrash;
  faEnvelope = faEnvelope;

  // for pagination
  pageNumberAcceptedMatches = 1;
  pageNumberRequests = 1;

  // getting active & collapsed state
  acceptedCollapsed = true;
  requestsCollapsed = false;

  // for modal
  display = 'none';
  modalIsOpen = false;
  modalUser: User;
  firstname: string;
  lastname: string;
  sex: string;
  city: string;
  activities: string;
  arr: string;
  age: string;

  constructor(
    private authService: AuthService,
    private matchStoreService: MatchStoreService,
    private router: Router,
    private chatservice: ChatService,
    private userStoreService: UserStoreService
  ) {
    this.matchStoreService.getAllMatchrequests().subscribe(matches => {
      this.matchRequestLength = matches.length;
      this.matchRequests$ = matches;
      console.log(this.matchRequestLength);
    });

    this.matchStoreService.getAllAcceptedMatchesAsInitiator().subscribe(matches => {
      this.acceptedMatchesAsInitiator$ = matches;
    });

    this.matchStoreService.getAllAcceptedMatchesAsPartner().subscribe(matches => {
      this.acceptedMatchesAsPartner$ = matches;
    });
    console.log(this.matchRequestLength);
  }

  ngOnInit() {
    console.log('Aufruf - Matches');
  }

  // calculateAgeForEachUser() {
  //   // tslint:disable-next-line:prefer-for-of
  //   for (let i = 0; i < this.userForSpecificRequest.length; i++) {
  //     const birthdate = this.userForSpecificRequest[i].dateOfBirth;
  //     const timeDiff = Math.abs(Date.now() - birthdate);
  //     const age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
  //     this.userForSpecificRequest[i].dateOfBirth = age;
  //   }
  // }

  contactUser(initiatorID: string, partnerID: string) {
    const currentUserID = this.authService.currentUserID;
    let userB;

    if (initiatorID === currentUserID) {
      userB = partnerID;
    }
    if (partnerID === currentUserID) {
      userB = initiatorID;
    }

    this.chatservice.create(currentUserID, userB)
      .subscribe(response => {
        if (response.result) {
          this.router.navigate([`chats/${response.id}`]);
        } else if (!response.result) {
          this.router.navigate([`chats/${response.id}`]);
        }
      });
  }

  deleteMatchrequest(matchId: string) {
    this.matchStoreService.deleteMatch(matchId)
      .subscribe(() => {
        if (this.matchRequestLength === 1) {
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
            this.router.navigate(['/matches']));
        }
      });
  }

  /*   openModal(match) {
      console.log('id: ' + match.uid);
      this.modalIsOpen = true;
      this.display = 'block';
    }

    closeModal() {
      this.display = 'none';
      this.modalIsOpen = false;
    } */


  openModal(id: any) {
    this.activities = '';
    // console.log('id: ' + id);
    this.modalIsOpen = true;
    this.display = 'block';
    this.userStoreService.getUserById(id).subscribe((user: User) => {
      this.firstname = user.firstname;
      this.lastname = user.lastname;
      this.sex = user.sex;
      this.city = user.city;
      this.activities = this.activitiesForModal(user.activities);
      this.age = this.calculateAgeForModal(user.dateOfBirth);
    });
  }

  calculateAgeForModal(birthdate: Date): string {
    const BD = new Date(birthdate);
    const timeDiff = Math.abs(Date.now() - BD.getTime());
    const age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);
    return age + '';
  }

activitiesForModal(activities: string[]): string {
  this.arr = '';
  activities.forEach(element => {
    this.arr = element + ', ' + this.arr;
  });
  return this.arr.substring(0, (this.arr.length - 2));
}


closeModal() {
  this.display = 'none';
  this.modalIsOpen = false;
}

validateCurrentUser(initiatorID: string, partnerID: string) {
  if (this.authService.currentUserID === initiatorID) {
    return partnerID;
  } else {
    return initiatorID;
  }
}

}

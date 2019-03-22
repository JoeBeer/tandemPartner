import { Match } from './../../models/match';
import { MatchStoreService } from './../../services/match-store.service';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { faTrash, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { ChatService } from 'src/app/services/chat.service';
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

  matchRequests$;

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

  openedModal: any;

  constructor(private authService: AuthService,
              private matchStoreService: MatchStoreService,
              private router: Router,
              private chatservice: ChatService ) { }

  ngOnInit() {
    // this.matchStoreService.getAllMatchesForSpecificUserAsInitiator(this.authService.currentUserID).subscribe((matches: Match[]) => {
    //   this.matchA = matches;
    //   console.log(this.matchA);
    //   // tslint:disable-next-line:max-line-length
    //   this.matchStoreService.getAllAcceptedMatchesForSpecificUserAsPartner(this.authService.currentUserID).subscribe((matchesB: Match[]) => {
    //     this.matchB = matchesB;
    //     console.log(this.matchB);
    //     this.allMatches = this.matchA.concat(this.matchB);
    //     console.log(this.allMatches);
    //     this.pushMatchToAcceptedMatches();
    //     this.pushMatchToMatchrequests();
    //   });
    // });
    this.matchRequests$ = this.matchStoreService.getAllMatchrequests();
    console.log(this.matchRequests$);
  }

  pushMatchToAcceptedMatches() {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.allMatches.length; i++) {
      let j = 0;
      if (this.allMatches[i].accepted === true) {
        this.acceptedMatches[j] = this.allMatches[i];
        j++;
      }
    }
  }

  pushMatchToMatchrequests() {
    for (let i = 0; i < this.allMatches.length; i++) {
      let j = 0;
      if (this.allMatches[i].accepted === false) {
        this.matchrequests[i] = this.allMatches[i];
        j++;
      }
    }
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
//
  contactUser(initiatorID: string, partnerID: string) {
    // TODO: cretae new chatroom and redirect to the chatroom
    // tslint:disable-next-line:max-line-length
    // this.chatservice.create(initiatorID, partnerID).subscribe( this.router.navigate(['/'])).catch( this.router.navigate(['/']);) currently only pseudocode
  }

  deleteMatchrequest(matchId: string) {
    // TODO: delete the specific matchrequest
    this.matchStoreService.deleteMatch(matchId);
  }

  openModal(id: string) {
    console.log('id: ' + id);
    this.modalIsOpen = true;
    this.display = 'block';
   // this.allMatches.forEach( match => {
   //   if (match.id === id) {
   //     this.openedModal = match;
   //   }
   // });
  }

  closeModal() {
    this.display = 'none';
    this.modalIsOpen = false;
  }

}

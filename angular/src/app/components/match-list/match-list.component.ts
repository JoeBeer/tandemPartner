import { Match } from './../../models/match';
import { MatchStoreService } from './../../services/match-store.service';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { faTrash, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
// import { ChatService } from './../../services/chat.service';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss']
})
export class MatchListComponent implements OnInit {

  allMatches: Match[];
  acceptedMatches: Match[];
  matchrequests: Match[];

  // for fontawesome icons
  faTrash = faTrash;
  faEnvelope = faEnvelope;

  // for pagination
  pageNumberAcceptedMatches = 1;
  pageNumberRequests = 1;

  // for modal
  display = 'none';
  modalIsOpen = false;

  openedModal: any;

  constructor(private authService: AuthService,
              private matchStoreService: MatchStoreService,
              private router: Router,
            /* private chatservice: ChatService */ ) { }

  ngOnInit() {
   // this.matchStoreService.getAllMatchesForSpecificUser(this.authService.currentUser.uid).then(matches => {
   //   this.allMatches = matches;
   // });
  this.acceptedMatches = [
       new Match(
       'kycsoFi1RPaNy3hJxwmFhbD032I3',
       'xMFp4LlYHPXZ3ntVWvRsq0cwzl02',
       'kochen',
       true),
       new Match(
        'kycsoFi1RPaNy3hJxwmFhbD032I3',
        'xMFp4LlYHPXZ3ntVWvRsq0cwzl02',
        'kochen',
        true),
       new Match(
        'kycsoFi1RPaNy3hJxwmFhbD032I3',
        'xMFp4LlYHPXZ3ntVWvRsq0cwzl02',
        'kochen',
        true)];
  this.matchrequests = [
       new Match(
       'a5WsJoGC2kbu0zto57mP',
       'xMFp4LlYHPXZ3ntVWvRsq0cwzl02',
       'schwimmen',
       false)
     ];
 // this.pushMatchToAcceptedMatches();
 // this.pushMatchToMatchrequests();
  }

  pushMatchToAcceptedMatches() {
    for (let i = 0; i > this.allMatches.length; i++) {
      let j = 0;
      if (this.allMatches[i].accepted === true) {
        this.acceptedMatches[j] = this.allMatches[i];
        j++;
      }
    }
  }

  pushMatchToMatchrequests() {
    for (let i = 0; i > this.allMatches.length; i++) {
      let j = 0;
      if (this.allMatches[i].accepted === false) {
        this.matchrequests[i] = this.allMatches[i];
        j++;
      }
    }
  }

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

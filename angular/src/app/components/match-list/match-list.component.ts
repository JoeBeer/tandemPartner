import { UserStoreService } from './../../services/user-store.service';
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

  matchRequests$: any[] = [];
  acceptedMatches$;

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

  constructor(
    private authService: AuthService,
    private matchStoreService: MatchStoreService,
    private router: Router,
    private chatservice: ChatService,
    private userStoreService: UserStoreService
    ) {
      this.matchStoreService.getAllMatchrequests().subscribe(matches => {
        // this.matchRequests$ = matches;
        matches.map(match => {
          this.userStoreService.getUserById(match.partnerID).subscribe(user => {
            const m = match;
            const u = user;
            this.matchRequests$.push({ ...m, ...u });
            console.log(user);
          });
        });
      });

      this.matchStoreService.getAllAcceptedMatches().subscribe(matches => {
        this.acceptedMatches$ = matches;
        matches.map(match => {
          if (this.authService.currentUserID === match.initiatorID) {
            this.userStoreService.getUserById(match.partnerID).subscribe(user => {
              console.log('Partner');
              console.log(user);
            });
          } else {
            this.userStoreService.getUserById(match.initiatorID).subscribe(user => {
              console.log('Initiator');
              console.log(user);
            });
          }
        });
      });
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
  //
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
      .subscribe();
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

  // async validateCurrentUser(initiatorID: string, partnerID: string) {
  //   // let username: string;
  //   if (this.authService.currentUserID === initiatorID) {
  //    const user =  await this.userStoreService.getUserById(partnerID).toPromise()
  //     console.log(user)
  //    return 'partnerID';
  //   } else {
  //     this.userStoreService.getUserById(initiatorID)
  //     const user =  await this.userStoreService.getUserById(initiatorID).toPromise()
  //     console.log(user)
  //     return 'initiatorID';
  //   }
  // }

  validateCurrentUser(initiatorID: string, partnerID: string) {
    if (this.authService.currentUserID === initiatorID) {
      return partnerID;
    } else {
      return initiatorID;
    }
  }

}

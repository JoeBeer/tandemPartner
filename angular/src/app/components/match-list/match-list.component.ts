import { ChatroomListComponent } from './../chatroom-list/chatroom-list.component';
import { TranslateService, DefaultLangChangeEvent } from '@ngx-translate/core';
import { Match } from './../../models/match';
import { MatchStoreService } from './../../services/match-store.service';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { faTrash, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { ChatService } from 'src/app/services/chat.service';
import { UtilityStoreService } from 'src/app/services/utility-store.service';

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
  acceptedMatchesAsInitiatorLength: number;
  acceptedMatchesAsPartnerLength: number;

  offers: string[];
  activities: string[];
  cities: string[];
  sex: string[];

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
  firstname: string;
  lastname: string;
  matchSex: string;
  city: string;
  matchActivities;
  matchIDModal: string;
  age;

  constructor(
    private authService: AuthService,
    private matchStoreService: MatchStoreService,
    private router: Router,
    private chatservice: ChatService,
    private utliltyStoreService: UtilityStoreService,
    private translateService: TranslateService,
    private chatroomListComponent: ChatroomListComponent
  ) {
    // initialize all the matchrequests from the current user, where the current user ID is equal to initiatorID
    this.matchStoreService.getAllMatchrequests().subscribe(matches => {
      this.matchRequestLength = matches.length;
      this.matchRequests$ = matches;
    }, () => {
      console.log('Error in match-list-page - TODO delete this console.log() before finishing WebProg!');
    });

    // initialize all the accepted matches from the current user, where the current user ID is equal to initiatorID
    this.matchStoreService.getAllAcceptedMatchesAsInitiator().subscribe(matches => {
      this.acceptedMatchesAsInitiatorLength = matches.length;
      this.acceptedMatchesAsInitiator$ = matches;
    }, () => {
      console.log('Error in match-list-page - TODO delete this console.log() before finishing WebProg!');
    });

    // initialize all the accepted matches from the current user, where the current user ID is equal to partnerID
    this.matchStoreService.getAllAcceptedMatchesAsPartner().subscribe(matches => {
      this.acceptedMatchesAsPartnerLength = matches.length;
      this.acceptedMatchesAsPartner$ = matches;
    }, () => {
      console.log('Error in match-list-page - TODO delete this console.log() before finishing WebProg!');
    });
  }

  ngOnInit() {
    this.setAllUtilities();
    this.translateService.onDefaultLangChange.subscribe((event: DefaultLangChangeEvent) => {
      this.setAllUtilities();
    });
  }

  // loads the lists with cities, offers, activities and sex
  setAllUtilities() {
    this.cities = this.utliltyStoreService.getAllCities(this.translateService.getDefaultLang());
    this.offers = this.utliltyStoreService.getAllOffers(this.translateService.getDefaultLang());
    this.activities = this.utliltyStoreService.getAllActivities(this.translateService.getDefaultLang());
    this.sex = this.utliltyStoreService.getAllSex(this.translateService.getDefaultLang());
  }

  // try to create a chatroom, if there exists already a chatroom for these users, then redirect to that chatroom
  contactUser(matchUid: string) {
    const currentUserID = this.authService.currentUserID;

    this.chatservice.create(currentUserID, matchUid)
      .subscribe(response => {
        if (response.result) {
          this.router.navigate([`chats/${response.id}`]);
        } else if (!response.result) {
          this.router.navigate([`chats/${response.id}`]);
        }
      });
  }

  // delete accepted match and corresponding chatroom from the database
  deleteAcceptedMatchAndCorrespondingChatroom(acceptedMatchesArrayName: string, matchId: string, matchPartner: string) {
    let indexNumber: number;
    const chatsAsUserAArray = this.chatroomListComponent.userChatsAsUserA$;
    const chatsAsUserBArray = this.chatroomListComponent.userChatsAsUserB$;
    if (acceptedMatchesArrayName === 'acceptedMatchesAsInitiator$') {
      this.matchStoreService.deleteMatch(matchId).subscribe(() => {
        for (let index = 0; index < this.acceptedMatchesAsInitiator$.length; index++) {
          if (this.acceptedMatchesAsInitiator$[index].id === matchId) {
            indexNumber = index;
          }
        }
        this.acceptedMatchesAsInitiator$.splice(indexNumber, 1);
      });
    } else if (acceptedMatchesArrayName === 'acceptedMatchesAsPartner$') {
      this.matchStoreService.deleteMatch(matchId).subscribe(() => {
        for (let index = 0; index < this.acceptedMatchesAsPartner$.length; index++) {
          if (this.acceptedMatchesAsPartner$[index].id === matchId) {
            indexNumber = index;
          }
        }
        this.acceptedMatchesAsPartner$.splice(indexNumber, 1);
      });
    }

    chatsAsUserAArray.forEach(chat => {
      if (chat.userB === matchPartner) {
        this.chatservice.deleteChatroom(chat.id).subscribe();
      }
    });

    chatsAsUserBArray.forEach(chat => {
      if (chat.userA === matchPartner) {
        this.chatservice.deleteChatroom(chat.id).subscribe();
      }
    });

  }

  // delete matchrequest from database
  deleteMatchrequest(matchId) {
    let indexNumber: number;
    this.matchStoreService.deleteMatch(matchId)
      .subscribe(() => {
        // tslint:disable-next-line:prefer-for-of
        for (let index = 0; index < this.matchRequests$.length; index++) {
          if (this.matchRequests$[index].matchId === matchId) {
            indexNumber = index;
          }
        }
        // delete match at indexNumber
        this.matchRequests$.splice(indexNumber, 1);
      });
  }

  openModal(match) {
    // infos for modal
    this.matchIDModal = match.uid;
    this.modalIsOpen = true;
    this.display = 'block';
    this.firstname = match.firstname;
    this.lastname = match.lastname;
    this.matchSex = this.parseSexValueForFrontend(match.sex);
    this.city = this.parseCityForFrontend(match.city);
    this.matchActivities = this.activitiesForModal(this.parseActivitiesForFrontend(match.activities));
    this.age = this.parseDateOfBirthForFrontend(match.dateOfBirth);
  }

  activitiesForModal(activities: string[]): string {
    let arr;
    arr = '';
    activities.forEach(element => {
      arr = element + ', ' + arr;
    });
    return arr.substring(0, (arr.length - 2));
  }

  // converts the sex value from the database for the frontend
  parseSexValueForFrontend(sexIndex: number): string {
    return this.sex[sexIndex];
  }

  // validateCurrentUser(initiatorID: string, partnerID: string) {
  //   if (this.authService.currentUserID === initiatorID) {
  //     return partnerID;
  //   } else {
  //     return initiatorID;
  //   }
  // }

  // converts the activities from the database for the frontend
  parseActivitiesForFrontend(activitiesIndex: number[]) {
    const activities: string[] = [];

    activitiesIndex.forEach(activityIndex => {
      activities.push(this.activities[activityIndex]);
    });
    return activities;
  }

  // converts the offers from the database for the frontend
  parseOfferForFrontend(selectedOfferIndex: number) {
    return this.offers[selectedOfferIndex];
  }

  // converts the date of birth value from the database for the frontend
  parseDateOfBirthForFrontend(dateOfBirth: number) {
    const ageDifMs = Date.now() - dateOfBirth;
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  // converts the city value from the database for the frontend
  parseCityForFrontend(cityIndex: number) {
    return this.cities[cityIndex];
  }

  closeModal() {
    this.display = 'none';
    this.modalIsOpen = false;
  }

  loadingButton(event) {
    event.target.classList.add('disabled');
  }
}

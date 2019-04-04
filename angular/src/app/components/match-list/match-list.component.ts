import { TranslateService, DefaultLangChangeEvent } from '@ngx-translate/core';
import { UserStoreService } from './../../services/user-store.service';
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

  offers;
  activities;
  cities;
  sex;

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
    private userStoreService: UserStoreService,
    private utliltyStoreService: UtilityStoreService,
    private translateService: TranslateService
  ) {
    this.matchStoreService.getAllMatchrequests().subscribe(matches => {
      this.matchRequestLength = matches.length;
      this.matchRequests$ = matches;
    });

    this.matchStoreService.getAllAcceptedMatchesAsInitiator().subscribe(matches => {
      this.acceptedMatchesAsInitiator$ = matches;
    });

    this.matchStoreService.getAllAcceptedMatchesAsPartner().subscribe(matches => {
      this.acceptedMatchesAsPartner$ = matches;
    });
  }

  ngOnInit() {
    this.setAllUtilities();
    this.translateService.onDefaultLangChange.subscribe((event: DefaultLangChangeEvent) => {
      this.setAllUtilities();
    });
    console.log('Aufruf - Matches');
  }

  setAllUtilities() {
    this.cities = this.utliltyStoreService.getAllCities(this.translateService.getDefaultLang());
    this.offers = this.utliltyStoreService.getAllOffers(this.translateService.getDefaultLang());
    this.activities = this.utliltyStoreService.getAllActivities(this.translateService.getDefaultLang());
    this.sex = this.utliltyStoreService.getAllSex(this.translateService.getDefaultLang());
  }

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

  openModal(match) {
    console.log('id: ' + match.uid);
    this.modalIsOpen = true;
    this.display = 'block';
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

  parseActivitiesForFrontend(activitiesIndex: number[]) {
    const activities: string[] = [];

    activitiesIndex.forEach(activityIndex => {
      activities.push(this.activities[activityIndex]);
    });
    return activities;
  }

  parseOfferForFrontend(selectedOfferIndex: number) {
    return this.offers[selectedOfferIndex];
  }

  parseDateOfBirthForFrontend(dateOfBirth: number) {
    const ageDifMs = Date.now() - dateOfBirth;
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

}

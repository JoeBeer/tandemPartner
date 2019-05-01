import { TranslateService, DefaultLangChangeEvent } from '@ngx-translate/core';
import { UtilityStoreService } from './../../services/utility-store.service';
import { MatchStoreService } from './../../services/match-store.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
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

  unAcceptedMatches$: any[] = [];
  unAcceptedMatchesLength: number;

  activities: string[];
  cities: string[];
  offers: string[];
  sex: string[];

  openedModal: any;

  // for fontawesome icons
  faCheck = faCheck;
  faTimes = faTimes;

  // for pagination
  pageNumber = 1;

  // for modal
  display = 'none';
  modalIsOpen = false;
  firstname: string;
  lastname: string;
  matchSex: string;
  city: string;
  matchActivities: string;
  age: number;
  matchId: string;

  constructor(
    private matchStoreService: MatchStoreService,
    private utliltyStoreService: UtilityStoreService,
    private translateService: TranslateService
  ) {
    // initialize all the unaccepted matches from the current user, where the current user ID is equal to partnerID
    this.matchStoreService.getAllUnAcceptedMatches().subscribe(matches => {
      this.unAcceptedMatchesLength = matches.length;
      this.unAcceptedMatches$ = matches;
    }, () => {
    });
  }

  // when home-component was called, the written methods in ngOnInit gonna start
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

  acceptMatch(matchId) {
    let indexNumber: number;
    const data = {
      accepted: true
    };
    this.matchStoreService.updateMatch(matchId, data)
      .subscribe(() => {
        // tslint:disable-next-line:prefer-for-of
        for (let index = 0; index < this.unAcceptedMatches$.length; index++) {
          if (this.unAcceptedMatches$[index].matchId === matchId) {
            indexNumber = index;
          }
        }
        // delete match at indexNumber
        this.unAcceptedMatches$.splice(indexNumber, 1);
        this.closeModal();
      });
  }

  declineMatch(matchId) {
    let indexNumber: number;
    this.matchStoreService.deleteMatch(matchId)
      .subscribe(() => {
        // tslint:disable-next-line:prefer-for-of
        for (let index = 0; index < this.unAcceptedMatches$.length; index++) {
          if (this.unAcceptedMatches$[index].matchId === matchId) {
            indexNumber = index;
          }
        }
        // delete match at indexNumber
        this.unAcceptedMatches$.splice(indexNumber, 1);
        this.closeModal();
      });
  }

  openModal(match) {
    // infos for modal
    this.matchId = match.matchId;
    this.modalIsOpen = true;
    this.display = 'block';
    this.firstname = match.firstname;
    this.lastname = match.lastname;
    this.matchSex = this.parseSexValueForFrontend(match.sex);
    this.city = this.parseCityForFrontend(match.city);
    this.matchActivities = this.activitiesForModal(this.parseActivitiesForFrontend(match.activities));
    this.age = this.parseDateOfBirthForFrontend(match.dateOfBirth);
  }

  closeModal() {
    this.display = 'none';
    this.modalIsOpen = false;
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

  loadingButton(event) {
    event.target.classList.add('disabled');
  }
}

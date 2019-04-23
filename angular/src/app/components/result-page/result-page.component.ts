import { TranslateService, DefaultLangChangeEvent } from '@ngx-translate/core';
import { UtilityStoreService } from './../../services/utility-store.service';
import { Searchrequest } from './../../models/searchrequest';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from './../../services/search.service';
import { AuthService } from './../../services/auth.service';
import { MatchStoreService } from './../../services/match-store.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { Match } from '../..//models/match';
import { flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss']
})
export class ResultPageComponent implements OnInit {

  // input variables for searchparams and the Link for getting the result is required!!
  faUserCheck = faUserCheck;

  // for pagination the array
  pageNumber: 1;

  userForSpecificRequest: User[] = [];
  usersToBeExcludedArray: string[] = [];

  cities: string[];
  activities: string[];
  sex: string[];

  searchResults$: any[];
  searchResultLength: number;

  matchedOffer: any;

  // for modal
  display = 'none';
  modalIsOpen = false;

  constructor(
    private matchStoreService: MatchStoreService,
    private authService: AuthService,
    private searchService: SearchService,
    private route: ActivatedRoute,
    private utliltyStoreService: UtilityStoreService,
    private translateService: TranslateService
  ) { }

  ngOnInit() {
    this.setAllUtilities();
    this.translateService.onDefaultLangChange.subscribe((event: DefaultLangChangeEvent) => {
      this.setAllUtilities();
    });

    // initialize all search results from the current user that match the search criteria
    const searchRequestId = this.route.snapshot.paramMap.get('id');
    this.searchService.getSearchRequestById(searchRequestId).pipe(
      flatMap((searchRequest: Searchrequest) => {
        if (searchRequest !== undefined) {
          this.matchedOffer = searchRequest.offerParam;
        }
        return this.searchService.getSearchResult(searchRequest);
      })
    ).subscribe(searchResults => {
      this.searchResultLength = searchResults.length;
      this.searchResults$ = searchResults;
    }, () => {
      console.log('Error in result-page - TODO delete this console.log() before finishing WebProg!');
    });
  }

  // loads the lists with cities, offers, activities and sex
  setAllUtilities() {
    this.cities = this.utliltyStoreService.getAllCities(this.translateService.getDefaultLang());
    this.activities = this.utliltyStoreService.getAllActivities(this.translateService.getDefaultLang());
    this.sex = this.utliltyStoreService.getAllSex(this.translateService.getDefaultLang());
  }

  // calculateAgeForEachUser(birthdate: any) {
  //   const timeDiff = Math.abs(Date.now() - birthdate);
  //   const age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
  //   return age;
  // }

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

  // converts the city value from the database for the frontend
  parseCityForFrontend(cityIndex: number) {
    return this.cities[cityIndex];
  }

  // converts the activities from the database for the frontend
  parseActivitiesForFrontend(activitiesIndex: number[]) {
    const activities: string[] = [];

    activitiesIndex.forEach(activityIndex => {
      activities.push(this.activities[activityIndex]);
    });
    return activities;
  }

  // converts the date of birth value from the database for the frontend
  parseDateOfBirthForFrontend(dateOfBirth: number) {
    const ageDifMs = Date.now() - dateOfBirth;
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  // send matchrequest to matching user
  sendMatchrequest(partner: User) {
    const newMatch: Match = new Match(this.authService.currentUserID, partner.uid, this.matchedOffer, false);
    this.matchStoreService.createMatch(newMatch).subscribe();
  }

  calculateAge(birthdate: Date): string {
    const BD = new Date(birthdate);
    const timeDiff = Math.abs(Date.now() - BD.getTime());
    const age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);
    return age + '';
  }

  openModal() {
    this.modalIsOpen = true;
    this.display = 'block';
  }

  closeModal() {
    this.display = 'none';
    this.modalIsOpen = false;
  }
}

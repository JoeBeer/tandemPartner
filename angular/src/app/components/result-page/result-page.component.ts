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

  cities;
  activities;
  sex;

  searchResults$;

  matchedOffer;

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
    const searchRequestId = this.route.snapshot.paramMap.get('id');
    this.searchService.getSearchRequestById(searchRequestId).subscribe((searchRequest: Searchrequest) => {
      this.matchedOffer = searchRequest.offerParam; // TODO check, if the error message occures again
      this.searchResults$ = this.searchService.getSearchResult(searchRequest);
      // this.searchService.getSearchResult(searchRequest).subscribe(); // TODO subscribe in a subscribe is bad code. Try to fix this!
    });
  }

  setAllUtilities() {
    this.cities = this.utliltyStoreService.getAllCities(this.translateService.getDefaultLang());
    this.activities = this.utliltyStoreService.getAllActivities(this.translateService.getDefaultLang());
    this.sex = this.utliltyStoreService.getAllSex(this.translateService.getDefaultLang());
  }

  calculateAgeForEachUser(birthdate: any) {
    const timeDiff = Math.abs(Date.now() - birthdate);
    const age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
    return age;
  }

  parseSexValueForFrontend(sexIndex: number): string {
    return this.sex[sexIndex];
  }

  parseCityForFrontend(cityIndex: number) {
    return this.cities[cityIndex];
  }

  parseActivitiesForFrontend(activitiesIndex: number[]) {
    const activities: string[] = [];

    activitiesIndex.forEach(activityIndex => {
      activities.push(this.activities[activityIndex]);
    });
    return activities;
  }

  parseDateOfBirthForFrontend(dateOfBirth: number) {
    const ageDifMs = Date.now() - dateOfBirth;
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  sendMatchrequest(partner: User) {
    const newMatch: Match = new Match(this.authService.currentUserID, partner.uid, this.matchedOffer, false);
    this.matchStoreService.createMatch(newMatch).subscribe();
  }



}

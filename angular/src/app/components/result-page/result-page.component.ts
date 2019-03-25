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

  searchResults$;

  matchedOffer;

  constructor(
    private matchStoreService: MatchStoreService,
    private authService: AuthService,
    private searchService: SearchService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const searchRequestId = this.route.snapshot.paramMap.get('id');
    this.searchService.getSearchRequestById(searchRequestId).subscribe((searchRequest: Searchrequest) => {
      console.log(searchRequest);
      this.matchedOffer = searchRequest.offerParam; // TODO check, if the error message occures again
      this.searchResults$ = this.searchService.getSearchResult(searchRequest);
      this.searchService.getSearchResult(searchRequest).subscribe();
    });
  }

  calculateAgeForEachUser(birthdate: any) {
    const timeDiff = Math.abs(Date.now() - birthdate);
    const age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
    return age;
  }

  parseSexValueForFrontend(sex: string): string {
    if (sex === 'm') {
      return 'male';
    } else if (sex === 'f') {
      return 'female';
    }
  }

  sendMatchrequest(partner: User) {
    const newMatch: Match = new Match(this.authService.currentUserID, partner.uid, this.matchedOffer, false);
    this.matchStoreService.createMatch(newMatch).subscribe();
  }



}

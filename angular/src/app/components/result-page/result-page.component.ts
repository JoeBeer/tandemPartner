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

  matchedOffer;

  constructor(
    private matchStoreService: MatchStoreService,
    private authService: AuthService,
    private searchService: SearchService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.searchService.getUsersToBeExcludedArray().subscribe(userArray => {
      userArray.map(user => {
        if (this.usersToBeExcludedArray.includes(user) === false) {
          this.usersToBeExcludedArray.push(user);
        }
      });
      const searchRequestId = this.route.snapshot.paramMap.get('id');
      this.searchService.getSearchRequestById(searchRequestId).subscribe((searchRequest: Searchrequest) => {
        this.matchedOffer = searchRequest.offerParam;
        this.searchService.getSearchResult(searchRequest).subscribe(users => {
          users.map(user => {
            if (this.usersToBeExcludedArray.includes(user.uid) === false) {
              this.userForSpecificRequest.push(user);
            }
          });
        });
      });
    });

    // this.searchService.getSearchRequestById(searchRequestId).subscribe((searchRequest: Searchrequest) => {
    //   console.log(searchRequest);
    //   this.searchResults$ = this.searchService.getSearchResult(searchRequest);
    //   this.searchService.getSearchResult(searchRequest).subscribe(docs => {
    //     console.log(docs);
    //   });
    // });
  }

  showAllUsersForSpecificRequest() {
    // TODO: get the link where the requests comes from
    this.editRequestsBeforeInit();
    return this.userForSpecificRequest;
  }

  editRequestsBeforeInit() {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.userForSpecificRequest.length; i++) {
      this.userForSpecificRequest[i].dateOfBirth = this.calculateAgeForEachUser(this.userForSpecificRequest[i].dateOfBirth);
      this.userForSpecificRequest[i].sex = this.parseSexValueForFrontend(this.userForSpecificRequest[i].sex);
    }
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
    console.log(partner);
    this.matchStoreService.createMatch(newMatch).subscribe(() => {
      // find index of requested user in the array
      console.log('in subscribe');
      const index = this.userForSpecificRequest.indexOf(partner);
      // delete the requested user and shorten the array - showing the remaining users will be updated automatically
      this.userForSpecificRequest.splice(index, 1);
    });
  }



}

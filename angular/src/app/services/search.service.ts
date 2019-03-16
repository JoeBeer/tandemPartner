import { Injectable } from '@angular/core';
import { Searchrequest } from '../models/searchrequest';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  recentSearchReaquets: Searchrequest[] = [
    new Searchrequest( 18, 40, 'both', 'kochen'),
    new Searchrequest( 19, 20, 'female', 'schwimmen'),
    new Searchrequest( 20, 30, 'male', 'rudern')
  ];

  constructor() { }

  createSearchRequest(searchdata: any) {}

  getRecentSearchrequestsForSpecificUser(uid: string) {
    return this.recentSearchReaquets;
  }

  createSearchrequest(searchdata: any) {
    console.log(searchdata);
  }

  takeExistingSearchrequest(searchdata: any) {
    console.log(searchdata);
  }
}

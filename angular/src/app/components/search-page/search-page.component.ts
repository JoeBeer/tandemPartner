import { AuthService } from './../../services/auth.service';
import { Searchrequest } from './../../models/searchrequest';
import { ActivitiesOffersCitiesStoreService } from './../../services/activities-offers-cities-store.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  searchForm: FormGroup;

  // where the data for the select fields comes from
  sexes = ['female', 'male', 'both'];
  offers: string[];
  cities: string[];

  // where the selected data will be saved
  selectedOffer: string;
  selectedCity: string;
  selectedSex: string;

  // settings for select fields
  selectOnlyOneSettings = {};
  selectSexSettings = {};

  recentSearchrequests: Searchrequest[];

  // getting active & collapsed state
  newSearchCollapsed = true;
  recentRequestCollapsed = false;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private activitiesOffersCitiesStoreService: ActivitiesOffersCitiesStoreService,
              private searchService: SearchService,
              private authService: AuthService) {
    this.searchForm = this.createSearchForm();
              }

  ngOnInit() {
    // initialzie all available offers & cities
    this.offers = this.activitiesOffersCitiesStoreService.getAllOffers();
    this.cities = this.activitiesOffersCitiesStoreService.getAllCities();

    this.initializeMultiselectSettings();

    // tslint:disable-next-line:max-line-length
    this.searchService.getRecentSearchrequestsForSpecificUser(this.authService.currentUserID).subscribe((requests: Searchrequest[]) => {
      this.recentSearchrequests = requests;
    });
  }

  createSearchForm() {
     // create the formGroup
     return this.formBuilder.group ({
       searchFormMinAge: [''],

       searchFormMaxAge: ['']
     }, {validator: this.ageCheckValidator});
  }

  initializeMultiselectSettings() {
    this.selectOnlyOneSettings = {
      singleSelection: true,
      idField: 'item_id',
      textField: 'item_text',
      enableCheckAll: false,
      allowSearchFilter: true,
      closeDropDownOnSelection: true
    };

    this.selectSexSettings = {
      singleSelection: true,
      idField: 'item_id',
      textField: 'item_text',
      enableCheckAll: false,
      allowSearchFilter: false,
      closeDropDownOnSelection: true,
    };
  }

  ageCheckValidator(control: AbstractControl): { invalid: boolean} {
    if (control.get('searchFormMinAge').value > control.get('searchFormMaxAge').value) {
      return {invalid: true };
    }
  }

  newSearchSave() {

    const searchdata = {
      offerParam: this.selectedOffer,
      cityParam: this.selectedCity,
      sexParam: this.parseSexValueForBackend(this.selectedSex),
      minAgeParam: this.searchForm.value.searchFormMinAge,
      maxAgeParam: this.searchForm.value.searchFormMaxAge
    };

    this.searchService.createSearchrequest(this.authService.currentUserID, searchdata).subscribe(() => {
      this.router.navigate(['/search/result']);
    });
  }

  useRecentSearchrequest(request: Searchrequest) {
    this.searchService.takeExistingSearchrequest(this.authService.currentUserID, request).subscribe(() => {
      this.router.navigate(['/search/result']);
    });
  }

  // shorten the male/female-word and return one letter or 'no choice'
  parseSexValueForBackend(sex: string): string {
    if (sex === 'male' || sex === 'männlich') {
      return 'm';
    } else if (sex === 'female' || sex === 'weiblich') {
      return 'f';
    } else if (sex === 'both' || sex === 'egal') {
      return 'b';
    } else {
      return 'there was no choice of sex';
    }
  }

  get searchFormMinAge() {
    return this.searchForm.get('searchFormMinAge');
  }

  get searchFormMaxAge() {
    return this.searchForm.get('searchFormMaxAge');
  }

}

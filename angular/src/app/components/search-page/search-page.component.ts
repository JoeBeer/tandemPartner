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

  sexes = ['female', 'male', 'both'];
  offers: string[];
  activities: string[];
  cities: string[];

  selectedOffer: string;
  selectedActivities: string[];
  selectedCity: string;
  selectedSex: string;

  selectOnlyOneSettings = {};
  selectActivitiesSettings = {};

  recentSearchrequests: Searchrequest[];

  // getting active & collapsed state
  newSearchCollapsed = false;
  recentRequestCollapsed = false;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private activitiesOffersCitiesStoreService: ActivitiesOffersCitiesStoreService,
              private searchService: SearchService) {
    this.searchForm = this.createSearchForm();
              }

  ngOnInit() {
    // initialzie all available offers & activities
    this.offers = this.activitiesOffersCitiesStoreService.getAllOffers();
    this.activities = this.activitiesOffersCitiesStoreService.getAllActivities();
    this.cities = this.activitiesOffersCitiesStoreService.getAllCities();

    this.initializeMultiselectSettings();

    // TODO: implement the currentUser
    this.recentSearchrequests = this.searchService.getRecentSearchrequestsForSpecificUser('2');
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
    allowSearchFilter: false,
    closeDropDownOnSelection: true
  };

  // selecting settings for the select fields of offers and activities
  this.selectActivitiesSettings = {
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    enableCheckAll: false,
    itemsShowLimit: 3,
    allowSearchFilter: false
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
      activities: this.selectedActivities,
      sexParam: this.parseSexValueForBackend(this.selectedSex),
      minAgeParam: this.searchForm.value.searchFormMinAge,
      maxAgeParam: this.searchForm.value.searchFormMaxAge
    };

    this.searchService.createSearchrequest(searchdata);
  }

  useRecentSearchrequest(request: Searchrequest) {
    this.searchService.takeExistingSearchrequest(request);
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

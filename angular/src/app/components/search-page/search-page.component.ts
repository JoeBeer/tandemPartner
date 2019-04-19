import { AuthService } from './../../services/auth.service';
import { Searchrequest } from './../../models/searchrequest';
import { UtilityStoreService } from '../../services/utility-store.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';
import { TranslateService, DefaultLangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  searchForm: FormGroup;

  // where the data for the select fields comes from
  sex: string[];
  sexDe = ['weiblich', 'männlich', 'beide'];
  sexEn = ['female', 'male', 'both'];
  offers: string[];
  cities: string[];

  // where the selected data will be saved
  selectedOffer: string;
  selectedCity: string[] = [];
  selectedSex: string;

  // settings for select fields
  selectOnlyOneSettings = {};
  selectSexSettings = {};

  recentSearchrequests: Searchrequest[];

  recentSearchRequests$;

  // getting active & collapsed state
  newSearchCollapsed = true;
  recentRequestCollapsed = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private utliltyStoreService: UtilityStoreService,
    private searchService: SearchService,
    private authService: AuthService,
    private translateService: TranslateService
  ) {
    this.searchForm = this.createSearchForm();
  }

  ngOnInit() {
    // initialzie all available offers & cities
    this.setAllUtilities();
    this.translateService.onDefaultLangChange.subscribe((event: DefaultLangChangeEvent) => {
      this.setAllUtilities();
    });
    this.initializeMultiselectSettings();

    this.recentSearchRequests$ = this.searchService.getRecentSearchRequests();
    // console.log('Aufruf - search');
  }

  setAllUtilities() {
    this.cities = this.utliltyStoreService.getAllCities(this.translateService.getDefaultLang());
    this.offers = this.utliltyStoreService.getAllOffers(this.translateService.getDefaultLang());
    this.sex = this.getSex(this.translateService.getDefaultLang());
  }

  createSearchForm() {
    // create the formGroup
    return this.formBuilder.group({
      searchFormMinAge: [''],

      searchFormMaxAge: ['']
    }, { validator: this.ageCheckValidator });
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

  ageCheckValidator(control: AbstractControl): { invalid: boolean } {
    if (control.get('searchFormMinAge').value > control.get('searchFormMaxAge').value) {
      return { invalid: true };
    }
  }

  newSearchSave() {

    const searchdata = {
      offerParam: this.offers.indexOf(this.selectedOffer[0]),
      cityParam: this.cities.indexOf(this.selectedCity[0]),
      sexParam: this.sex.indexOf(this.selectedSex[0]),
      minAgeParam: Number(this.searchForm.value.searchFormMinAge),
      maxAgeParam: Number(this.searchForm.value.searchFormMaxAge),
      createdAt: Date.now(),
      uid: this.authService.currentUserID
    };

    this.searchService.createSearchrequest(searchdata)
      .subscribe(response => {
        this.router.navigate([`/result/${response.id}`]);
      });
  }

  useRecentSearchrequest(searchRequestId) {
    this.router.navigate([`/result/${searchRequestId}`]);
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

  parseSexValueForFrontend(sexIndex: number): string {
    return this.sex[sexIndex];
  }

  parseOfferForFrontend(offerIndex: number) {
    return this.offers[offerIndex];
  }

  getSex(language: string) {
    if (language === 'de') {
      return this.sexDe;
    } else {
      return this.sexEn;
    }
  }

  get searchFormMinAge() {
    return this.searchForm.get('searchFormMinAge');
  }

  get searchFormMaxAge() {
    return this.searchForm.get('searchFormMaxAge');
  }

  loadingButton(event) {
    this.translateService.stream('loading.button').subscribe(key => {
      document.getElementById('loadingButton').innerText = key;
    });
    event.target.classList.add('disabled');
  }
}

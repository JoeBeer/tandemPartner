import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserStoreService } from 'src/app/services/user-store.service';
import { AuthService } from 'src/app/services/auth.service';
import { ActivitiesOffersCitiesStoreService } from '../../services/activities-offers-cities-store.service';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  md5 = new Md5();
  registerForm: FormGroup;

  sexes = ['female', 'male'];
  offers: any[];
  activities: any[];
  cities: string[];

  selectedOffers: any[];
  selectedActivities: any[];
  selectedCity: any;
  selectedSex: any[];

  selectOffersActivitiesSettings = {};
  selectSexSettings = {};
  selectCitySettings = {};


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userStoreService: UserStoreService,
    private authService: AuthService,
    private activitiesOffersCitiesStoreService: ActivitiesOffersCitiesStoreService) {

    this.registerForm = this.createRegisterForm();
  }

  ngOnInit() {
    // initialzie all available offers & activities
    this.offers = this.activitiesOffersCitiesStoreService.getAllOffers();
    this.activities = this.activitiesOffersCitiesStoreService.getAllActivities();
    this.cities = this.activitiesOffersCitiesStoreService.getAllCities();

    this.initializeMultiselectSettings();
  }

  createRegisterForm() {
    // create the formGroup
    return this.formBuilder.group({
      // the field only contains letters or spaces
      registerFormFirstname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],

      // the field only contains letters or spaces
      registerFormLastname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],

      registerFormMail: ['', [Validators.required, Validators.email]],

      registerFormBirthday: ['', Validators.required],

      // at least 6 characters, must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number, can contain special characters
      // tslint:disable-next-line:max-line-length
      registerFormPassword: ['', [Validators.required, /*Validators.pattern('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$'),*/ Validators.minLength(6), Validators.maxLength(16)]],

      // at least 6 characters, must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number, can contain special characters
      // tslint:disable-next-line:max-line-length
      registerFormPasswordConfirm: ['', [Validators.required, /*Validators.pattern('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$'),*/ Validators.minLength(6), Validators.maxLength(16)]]
      // adds the custom validator for validating the passwords og their matching
    }, { validator: this.passwordMatchValidator });
  }

  initializeMultiselectSettings() {
    // selecting settings for the select fields of choosing the sex
    this.selectSexSettings = {
      singleSelection: true,
      idField: 'item_id',
      textField: 'item_text',
      enableCheckAll: false,
      allowSearchFilter: false,
      closeDropDownOnSelection: true
    };

    this.selectCitySettings = {
      singleSelection: true,
      idField: 'item_id',
      textField: 'item_text',
      enableCheckAll: false,
      allowSearchFilter: true,
      closeDropDownOnSelection: true
    };

    // selecting settings for the select fields of offers and activities
    this.selectOffersActivitiesSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      enableCheckAll: false,
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  // validate the passwords whether they are matching
  passwordMatchValidator(control: AbstractControl): { invalid: boolean } {
    if (control.get('registerFormPassword').value !== control.get('registerFormPasswordConfirm').value) {
      return { invalid: true };
    }
  }

  // validate the input & select fields and send the mail & password to Firebase Authentication
  // after that the rest of userdata incl. the recieved UserID will be send to the API(Firebase Cloud Functions)
  registerFormSave() {

    if (this.registerForm.invalid) {
      return;
    }
    // get data from the inputfields
    const userdata = {
      firstname: this.registerForm.value.registerFormFirstname,
      lastname: this.registerForm.value.registerFormLastname,
      city: this.selectedCity,
      dateOfBirth: this.registerForm.value.registerFormBirthday,
      // get the only one item from selectedSex-Array
      sex: this.parseSexValueForBackend(this.selectedSex[0]),
      activities: this.selectedActivities,
      offers: this.selectedOffers,
      mail: this.registerForm.value.registerFormMail,
      // password: Md5.hashStr(this.registerForm.value.registerFormPassword)
      password: this.md5.appendStr(this.registerForm.value.registerFormMail)
        .appendStr(this.registerForm.value.registerFormPassword).end()
    };
    // create new user in Firebase Authentication and Cloud Firestore
    this.userStoreService.createUser(userdata).subscribe(() => {
      // then go to page 'home'
      this.router.navigate(['/login']);
    });

  }

  // shorten the male/female-word and return one letter or 'no choice'
  parseSexValueForBackend(sex: string): string {
    if (sex === 'male' || sex === 'männlich') {
      return 'm';
    } else if (sex === 'female' || sex === 'weiblich') {
      return 'f';
    } else {
      return 'there was no choice of sex';
    }
  }

  // getter for the inputfields
  get registerFormFirstname() {
    return this.registerForm.get('registerFormFirstname');
  }

  get registerFormLastname() {
    return this.registerForm.get('registerFormLastname');
  }

  get registerFormBirthday() {
    return this.registerForm.get('registerFormBirthday');
  }

  get registerFormMail() {
    return this.registerForm.get('registerFormMail');
  }

  get registerFormPassword() {
    return this.registerForm.get('registerFormPassword');
  }

  get registerFormPasswordConfirm() {
    return this.registerForm.get('registerFormPasswordConfirm');
  }

}

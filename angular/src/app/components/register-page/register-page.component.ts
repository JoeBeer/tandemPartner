import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserStoreService } from 'src/app/services/user-store.service';
import { AuthService } from 'src/app/services/auth.service';
import { UtilityStoreService } from '../../services/utility-store.service';
import { Md5 } from 'ts-md5';
import { TranslateService, DefaultLangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  md5 = new Md5();
  registerForm: FormGroup;

  sexes: any[];
  offers: any[];
  activities: any[];
  cities: string[];

  selectedOffers: any[];
  selectedActivities: any[];
  selectedCity: any;     // TODO check if this is seen as an array.
  selectedSex: any[];

  selectOffersActivitiesSettings = {};
  selectSexSettings = {};
  selectCitySettings = {};


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userStoreService: UserStoreService,
    private authService: AuthService,
    private utliltyStoreService: UtilityStoreService,
    private translateService: TranslateService) {

    this.registerForm = this.createRegisterForm();
  }

  ngOnInit() {
    // initialzie all available offers & activities
    this.setAllUtilities();
    this.translateService.onDefaultLangChange.subscribe((event: DefaultLangChangeEvent) => {
      this.setAllUtilities();
    });
    this.initializeMultiselectSettings();
  }

  setAllUtilities() {
    this.cities = this.utliltyStoreService.getAllCities(this.translateService.getDefaultLang());
    this.offers = this.utliltyStoreService.getAllOffers(this.translateService.getDefaultLang());
    this.activities = this.utliltyStoreService.getAllActivities(this.translateService.getDefaultLang());
    this.sexes = this.utliltyStoreService.getAllSex(this.translateService.getDefaultLang());
    this.sexes.splice(2, 1);
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
      registerFormPassword: ['', [Validators.required, Validators.pattern('^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d).{6,}$')]],

      // at least 6 characters, must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number, can contain special characters
      // tslint:disable-next-line:max-line-length
      registerFormPasswordConfirm: ['', [Validators.required, Validators.pattern('^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d).{6,}$')]]
        // adds the custom validator for validating the passwords og their matching
    }, { validator: this.passwordMatchValidator});

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
      city: this.selectedCity[0],
      dateOfBirth: Number(this.registerForm.value.registerFormBirthday),
      // get the only one item from selectedSex-Array
      sex: this.parseSexValueForBackend(this.selectedSex[0]),
      activities: this.selectedActivities,
      offers: this.selectedOffers,
      mail: this.registerForm.value.registerFormMail,
      password: this.md5.appendStr(this.registerForm.value.registerFormMail)
        .appendStr(this.registerForm.value.registerFormPassword).end()
    };
    // create new user in Firebase Authentication and Cloud Firestore
    this.userStoreService.createUser(userdata).subscribe(() => {
      // then go to page 'login'
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

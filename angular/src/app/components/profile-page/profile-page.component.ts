import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserStoreService } from 'src/app/services/user-store.service';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { ActivitiesOffersCitiesStoreService } from '../../services/activities-offers-cities-store.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  editForm: FormGroup;

  // for showing available offers, activities & cities
  offers: any[];
  activities: any[];
  cities: string[];

  // for loading/saving the selected fields
  selectedOffers: any[];
  selectedActivities: any[];
  selectedCity: any;
  sex: string;

  // for selecting fields
  selectCitySettings = {};
  selectOffersActivitiesSettings = {};


  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private userStoreService: UserStoreService,
              private authService: AuthService,
              private activitiesOffersCitiesStoreService: ActivitiesOffersCitiesStoreService) {

              this.editForm = this.createEditForm();
  }

  ngOnInit() {
    // initialzie all available offers & activities
    this.offers = this.activitiesOffersCitiesStoreService.getAllOffers();
    this.activities = this.activitiesOffersCitiesStoreService.getAllActivities();
    this.cities = this.activitiesOffersCitiesStoreService.getAllCities();


    this.sex = this.parseSexValueForFrontend(this.authService.getUser().sex);
    this.selectedActivities = this.authService.getUser().activities;
    this.selectedOffers = this.authService.getUser().offers,
    this.selectedCity = this.authService.getUser().city;
    this.editForm.get('editFormFirstname').setValue(this.authService.getUser().firstname);
    this.editForm.get('editFormLastname').setValue(this.authService.getUser().lastname);
    this.editForm.get('editFormMail').setValue(this.authService.firebaseUser.email);
    this.editForm.get('editFormBirthday').setValue(this.authService.getUser().dateOfBirth);

    this.initializeMultiselectSettings();
  }

  createEditForm() {
    // create the formGroup
    return this.formBuilder.group ({
      // the field only contains letters or spaces
      editFormFirstname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],

      // the field only contains letters or spaces
      editFormLastname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],

      editFormMail: ['', [Validators.required, Validators.email]],

      editFormBirthday: [{value: '', disabled: true}],

      // at least 6 characters, must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number, can contain special characters
      // tslint:disable-next-line:max-line-length
      editFormPassword: ['', [Validators.required, Validators.pattern('^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d).{6,}$')/* , Validators.minLength(6), Validators.maxLength(16) */]],

      // at least 6 characters, must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number, can contain special characters
      // tslint:disable-next-line:max-line-length
      editFormPasswordConfirm: ['', [Validators.required, Validators.pattern('^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d).{6,}$')/* , Validators.minLength(6), Validators.maxLength(16) */]]
        // adds the custom validator for validating the passwords og their matching
    }, { validator: this.passwordMatchValidator});
  }

  initializeMultiselectSettings() {

    this.selectCitySettings = {
      singleSelection: true,
      idField: 'item_id',
      textField: 'item_text',
      enableCheckAll: false,
      allowSearchFilter: false,
      closeDropDownOnSelection: true
    };
    // selecting settings for the select fields of offers and activities
    this.selectOffersActivitiesSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      enableCheckAll: false,
      itemsShowLimit: 3,
      allowSearchFilter: false
    };
  }

  parseSexValueForFrontend(sex: string): string {
    if (sex === 'm') {
      return 'male';
    } else if (sex === 'f') {
      return 'female';
    } else {
      return 'there was no choice of sex';
    }
  }

  parseSexValueForBackend(sex: string): string {
    if (sex === 'male' || sex === 'männlich') {
      return 'm';
    } else if (sex === 'female' || sex === 'weiblich') {
      return 'f';
    } else {
      return 'there was no choice of sex';
    }
  }

  // validate the passwords whether they are matching
  passwordMatchValidator(control: AbstractControl): { invalid: boolean} {
    if (control.get('editFormPassword').value !== control.get('editFormPasswordConfirm').value) {
      return {invalid: true };
    }
  }

  // validate the input & select fields and send the mail & password to Firebase Authentication
  // after that the rest of userdata incl. the recieved UserID will be send to the API(Firebase Cloud Functions)
  editFormSave() {

    if (this.editForm.invalid) {
      return;
    }
    // get data from the inputfields
    const userdata = {
      firstname: this.editForm.value.editFormFirstname,
      lastname: this.editForm.value.editFormLastname,
      city: this.selectedCity[0],
      dateOfBirth: this.editForm.value.editFormBirthday,
      // get the only one item from selectedSex-Array
      sex: this.parseSexValueForBackend(this.sex),
      activities: this.selectedActivities,
      offers: this.selectedOffers
    };


    // mail and password are gonna be saved at Firebase Authentication and not in userdata
    const mail = this.editForm.value.editFormMail;
    const password = this.editForm.value.editFormPassword;

    if (password === !null || password === !undefined || password === !'' ) {
      console.log('ausgefülltes password');
      // this.authService.firebaseUser.updatePassword(password).then();
    }

    if (mail === !null || mail === !undefined || mail === !'' ) {
      console.log('ausgefüllte mail');
      // this.authService.firebaseUser.updateEmail(mail).then();
    }

   // // create new user in cloud firestore and take the UID from the new created User
   // this.userStoreService.updateUser(this.authService.currentUser.uid, userdata).subscribe(() => {
   //   // then go to page 'home'
   //   this.router.navigate(['/home']);
   // });

  }


  // getter for the inputfields
  get editFormFirstname() {
    return this.editForm.get('editFormFirstname');
  }

  get editFormLastname() {
    return this.editForm.get('editFormLastname');
  }

  get editFormBirthday() {
    return this.editForm.get('editFormBirthday');
  }

 get editFormMail() {
   return this.editForm.get('editFormMail');
 }

 get editFormPassword() {
   return this.editForm.get('editFormPassword');
 }
 get editFormPasswordConfirm() {
   return this.editForm.get('editFormPasswordConfirm');
 }


}

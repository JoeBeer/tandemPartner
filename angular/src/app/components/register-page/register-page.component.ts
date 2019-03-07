import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { UserStoreService } from 'src/app/services/user-store.service';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { ActivitiesOffersService } from './../../services/activities-offers.service';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  registerForm: FormGroup;

  sexes = ['female', 'male'];
  offers: any[];
  activities: any[];

  selectedOffers: any[];
  selectedActivities: any[];
  selectedSex: any[];

  selectOffersActivitiesSettings = {};
  selectSexSettings = {};


  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private userStoreService: UserStoreService,
              private authService: AuthService,
              private activitiesOffersService: ActivitiesOffersService) {

              this.registerForm = this.createRegisterForm();
  }

  ngOnInit() {
    // initialzie all available offers & activities
    this.offers = this.activitiesOffersService.getAllOffers();
    this.activities = this.activitiesOffersService.getAllActivities();

    this.initializeMultiselectSettings();
  }

  createRegisterForm() {
    // create the formGroup
    return this.formBuilder.group ({
      registerFormFirstname: ['', Validators.required],

      registerFormLastname: ['', Validators.required],

      registerFormMail: ['', Validators.required],

      registerFormPassword: ['', Validators.required],

      registerFormPasswordConfirm: ['', Validators.required]

    });
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

  // validate the input & select fields and send the mail & password to Firebase Authentication
  // after that the rest of userdata incl. the recieved UserID will be send to the API(Firebase Cloud Functions)
  registerFormSave() {

    // validate the passwords
    if (this.registerForm.value.registerFormPassword !== this.registerForm.value.registerFormPasswordConfirm) {
      return alert('passwords not the same');
    }
    // get data from the inputfields
    const userdata = {
      firstname: this.registerForm.value.registerFormFirstname,
      lastname: this.registerForm.value.registerFormLastname,
      // get the only one item from selectedSex-Array
      sex: this.parseSexValueForBackend(this.selectedSex[0]),
      offers: this.selectedOffers,
      activities: this.selectedActivities
    };

    // mail and password are gonna be saved at Firebase Authentication and not in userdata
    const mail = this.registerForm.value.registerFormMail;
    const password = this.registerForm.value.registerFormPassword;

    // create new user at Authentication
    this.authService.signUpWithMailAndPassword(mail, password).then((res) => {
      console.log('UID: ', res.user.uid);
      // create new user in cloud firestore and take the UID from the new created User
      this.userStoreService.createUser(res.user.uid, userdata).subscribe(() => {
        // then go to page 'home'
        this.router.navigate(['/home']);
      });
    });
  }

  // shorten the male/female-word and return one letter or 'no choice'
  parseSexValueForBackend(sex: string): string {
    if (sex === 'male' || sex === 'männlich') {
      return 'm';
    } else if (sex === 'female' || sex === 'weiblich') {
      return 'f';
    } else {
      return 'there was no choice';
    }
  }

  // getter for the inputfields
  get registerFormFirstname() {
    return this.registerForm.get('registerFormFirstname');
  }

  get registerFormLastname() {
    return this.registerForm.get('registerFormLastname');
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

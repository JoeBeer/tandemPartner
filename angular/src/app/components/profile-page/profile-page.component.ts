import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserStoreService } from 'src/app/services/user-store.service';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UtilityStoreService } from '../../services/utility-store.service';
import { Md5 } from 'ts-md5';
import { TranslateService, DefaultLangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  md5 = new Md5();
  currentUser;
  editForm: FormGroup;

  // for showing available offers, activities & cities
  offers: any[];
  activities: any[];
  cities: string[];

  // for loading/saving the selected fields
  selectedOffers: any[];
  selectedActivities: any[];
  selectedCity;
  sex: string;

  // for selecting fields
  selectCitySettings = {};
  selectOffersActivitiesSettings = {};


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userStoreService: UserStoreService,
    private authService: AuthService,
    private utliltyStoreService: UtilityStoreService,
    private translateService: TranslateService) {

    this.editForm = this.createEditForm();
  }

  async ngOnInit() {
    // initialzie all available offers & activities
    this.setAllUtilities();
    this.translateService.onDefaultLangChange.subscribe((event: DefaultLangChangeEvent) => {
      this.setAllUtilities();
    });


    const user = await this.authService.getCurrentUser();

    this.userStoreService.getUserById(user.uid).subscribe((recievedUser: User) => {
      this.sex = this.parseSexValueForFrontend(recievedUser.sex);
      this.selectedActivities = recievedUser.activities;
      this.selectedOffers = recievedUser.offers,
      this.selectedCity = Array.of(recievedUser.city);
      this.editForm.get('editFormFirstname').setValue(recievedUser.firstname);
      this.editForm.get('editFormLastname').setValue(recievedUser.lastname);
      this.editForm.get('editFormMail').setValue(this.authService.currentUserMail);
      this.editForm.get('editFormBirthday').setValue(new Date(recievedUser.dateOfBirth));
    });

    this.initializeMultiselectSettings();
    console.log('Aufruf - Profile');
  }

  setAllUtilities() {
    this.cities = this.utliltyStoreService.getAllCities(this.translateService.getDefaultLang());
    this.offers = this.utliltyStoreService.getAllOffers(this.translateService.getDefaultLang());
    this.activities = this.utliltyStoreService.getAllActivities(this.translateService.getDefaultLang());
  }

  createEditForm() {
    // create the formGroup
    return this.formBuilder.group({
      // the field only contains letters or spaces
      editFormFirstname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],

      // the field only contains letters or spaces
      editFormLastname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],

      editFormMail: ['', [Validators.required, Validators.email]],

      editFormBirthday: [{ value: '', disabled: true }],

      // at least 6 characters, must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number, can contain special characters
      // tslint:disable-next-line:max-line-length
      editFormPassword: ['', [Validators.pattern('^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d).{6,16}$')]],

      // at least 6 characters, must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number, can contain special characters
      // tslint:disable-next-line:max-line-length
      editFormPasswordConfirm: ['', [Validators.pattern('^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d).{6,16}$')]]
      // adds the custom validator for validating the passwords og their matching
    }, { validator: this.passwordMatchValidator });

  }

  initializeMultiselectSettings() {

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

  // TODO: internationalize it!
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
  passwordMatchValidator(control: AbstractControl): { invalid: boolean } {
    if (control.get('editFormPassword').value !== control.get('editFormPasswordConfirm').value) {
      return { invalid: true };
    }
  }

  // validate the input & select fields and send the mail & password to Firebase Authentication
  // after that the rest of userdata incl. the recieved UserID will be send to the API(Firebase Cloud Functions)
  editFormSave() {

    if (this.editForm.invalid) {
      return;
    }

    let userdata;
    const mail = this.editForm.value.editFormMail;
    const password = this.editForm.value.editFormPassword;
    if (!!mail && !!password) {
      // get data from the inputfields
      userdata = {
        firstname: this.editForm.value.editFormFirstname,
        lastname: this.editForm.value.editFormLastname,
        city: this.selectedCity[0],
        dateOfBirth: this.editForm.value.editFormBirthday,
        // get the only one item from selectedSex-Array
        sex: this.parseSexValueForBackend(this.sex),
        activities: this.selectedActivities,
        offers: this.selectedOffers,
        mail,
        password: this.md5.appendStr(mail)
          .appendStr(password).end()
      };

      this.userStoreService.updateUser(this.authService.currentUserID, userdata).subscribe(() => {
        this.authService.logout();
      });
    } else {
      userdata = {
        firstname: this.editForm.value.editFormFirstname,
        lastname: this.editForm.value.editFormLastname,
        city: this.selectedCity[0],
        dateOfBirth: this.editForm.value.editFormBirthday,
        // get the only one item from selectedSex-Array
        sex: this.parseSexValueForBackend(this.sex),
        activities: this.selectedActivities,
        offers: this.selectedOffers
      };

      this.userStoreService.updateUser(this.authService.currentUserID, userdata).subscribe(() => {
        this.router.navigate(['/home']);
      });
    }

  }

  deleteUser() {
    this.userStoreService.deleteUser(this.authService.currentUserID).subscribe(() => {
      this.authService.logout();
    });
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

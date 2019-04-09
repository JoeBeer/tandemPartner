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
  md52 = new Md5();
  currentUser;
  userId: string;
  editForm: FormGroup;
  modalForm: FormGroup;

  // for showing available offers, activities & cities
  offers: any[];
  activities: any[];
  cities: string[];
  sex: string[];

  // for loading/saving the selected fields
  selectedOffers: any[];
  selectedActivities: any[];
  selectedCity;
  selectedSex: string;

  // for selecting fields
  selectCitySettings = {};
  selectOffersActivitiesSettings = {};

  // for passwordConfirming in confirmModal
  updateSuccess = false;
  invalidPassword = false;

  // for modal
  display = 'none';
  modalIsOpen = false;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userStoreService: UserStoreService,
    private authService: AuthService,
    private utliltyStoreService: UtilityStoreService,
    private translateService: TranslateService) {

    this.editForm = this.createEditForm();
    this.modalForm = this.createModalForm();
  }

  ngOnInit() {
    // initialzie all available offers & activities
    this.setAllUtilities();
    this.translateService.onDefaultLangChange.subscribe((event: DefaultLangChangeEvent) => {
      this.setAllUtilities();
    });

    this.userStoreService.getUserById(this.authService.currentUserID).subscribe((recievedUser: User) => {
      this.selectedSex = this.parseSexValueForFrontend(recievedUser.sex);
      this.selectedActivities = this.parseActivitiesForFrontend(recievedUser.activities);
      this.selectedOffers = this.parseOffersForFrontend(recievedUser.offers);
      this.selectedCity = Array.of(this.cities[recievedUser.city]);
      this.editForm.get('editFormFirstname').setValue(recievedUser.firstname);
      this.editForm.get('editFormLastname').setValue(recievedUser.lastname);
      this.editForm.get('editFormMail').setValue(this.authService.currentUserMail);
      this.editForm.get('editFormBirthday').setValue(new Date(recievedUser.dateOfBirth));
      // modalForm valid status will be validated, therefore has to be initialized in ngOnInit()
      this.modalForm.get('modalFormPassword');
    }, error => {
      console.log('Error in profile-page - TODO delete this console.log() before finishing WebProg!');
    });

    this.initializeMultiselectSettings();
  }

  setAllUtilities() {
    this.cities = this.utliltyStoreService.getAllCities(this.translateService.getDefaultLang());
    this.offers = this.utliltyStoreService.getAllOffers(this.translateService.getDefaultLang());
    this.activities = this.utliltyStoreService.getAllActivities(this.translateService.getDefaultLang());
    this.sex = this.utliltyStoreService.getAllSex(this.translateService.getDefaultLang());
  }

  createEditForm() {
    // create the formGroup
    return this.formBuilder.group({
      // the field only contains letters or spaces
      editFormFirstname: ['', [Validators.required, Validators.pattern('[a-zA-ZäÄüÜöÖß]*')]],

      // the field only contains letters or spaces
      editFormLastname: ['', [Validators.required, Validators.pattern('[a-zA-ZäÄüÜöÖß]*')]],

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

  createModalForm() {
    return this.formBuilder.group({
      modalFormPassword: ['', [Validators.required]]
    });
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

  parseSexValueForFrontend(sexIndex: number): string {
    return this.sex[sexIndex];
  }

  parseSexValueForBackend(sex: string): number {
    return this.sex.indexOf(sex);
  }

  parseActivitiesForFrontend(selectedActivitiesIndexes: number[]) {
    const selectedActivities: string[] = [];

    selectedActivitiesIndexes.forEach(activitiyIndex => {
      selectedActivities.push(this.activities[activitiyIndex]);
    });
    return selectedActivities;
  }

  parseActivitiesForBackend(selectedActivities: string[]) {
    const selectedActivitiesIndexes: number[] = [];

    selectedActivities.forEach(activity => {
      selectedActivitiesIndexes.push(this.activities.indexOf(activity));
    });
    return selectedActivitiesIndexes;
  }

  parseOffersForFrontend(selectedOffersIndexes: number[]) {
    const selectedOffers: string[] = [];

    selectedOffersIndexes.forEach(offerIndex => {
      selectedOffers.push(this.offers[offerIndex]);
    });
    return selectedOffers;
  }

  parseOffersForBackend(selectedOffers: string[]) {
    const selectedOffersIndexes: number[] = [];

    selectedOffers.forEach(offer => {
      selectedOffersIndexes.push(this.offers.indexOf(offer));
    });
    return selectedOffersIndexes;
  }

  // validate the passwords whether they are matching
  passwordMatchValidator(control: AbstractControl): { invalid: boolean } {
    if (control.get('editFormPassword').value !== control.get('editFormPasswordConfirm').value) {
      return { invalid: true };
    }
  }

  confirmAndValidatePassword() {

    // hash the input for conclusion with the saved password in firebase's Auth
    const password: string = this.md52.appendStr(this.authService.currentUserMail)
    .appendStr(this.modalForm.value.modalFormPassword).end() as string;

    this.authService.validatePassword(password)
    // when password was correct start editFormSave()
    .then(() => {
      this.invalidPassword = false;
      this.editFormSave();
    })
    // when the password was incorrect, show the specific message
    .catch(() => {
      this.updateSuccess = false;
      this.invalidPassword = true;
      setTimeout(() => {
        this.invalidPassword = false;
      }, 3000);
      this.modalForm.reset();
    });
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
        city: this.cities.indexOf(this.selectedCity[0]),
        dateOfBirth: this.editForm.value.editFormBirthday,
        // get the only one item from selectedSex-Array
        sex: this.parseSexValueForBackend(this.selectedSex),
        activities: this.parseActivitiesForBackend(this.selectedActivities),
        offers: this.parseOffersForBackend(this.selectedOffers),
        mail,
        password: this.md5.appendStr(mail)
          .appendStr(password).end()
      };

      this.userStoreService.updateUser(this.authService.currentUserID, userdata).subscribe(() => {
        // show the updateSuccess message
        this.updateSuccess = true;
        setTimeout(() => {
          this.updateSuccess = false;
        }, 3000);
        this.modalForm.reset();

        this.authService.logout();
      });
    } else {
      userdata = {
        firstname: this.editForm.value.editFormFirstname,
        lastname: this.editForm.value.editFormLastname,
        city: this.cities.indexOf(this.selectedCity[0]),
        dateOfBirth: this.editForm.value.editFormBirthday,
        // get the only one item from selectedSex-Array
        sex: this.parseSexValueForBackend(this.selectedSex),
        activities: this.parseActivitiesForBackend(this.selectedActivities),
        offers: this.parseOffersForBackend(this.selectedOffers)
      };

      this.userStoreService.updateUser(this.authService.currentUserID, userdata).subscribe(() => {
        // show the updateSuccess message
        this.updateSuccess = true;
        setTimeout(() => {
          this.updateSuccess = false;
        }, 3000);
        this.modalForm.reset();
      });
    } // end else
  }

  // deleteUser() {
  //   this.userStoreService.deleteUser(this.authService.currentUserID).subscribe(() => {
  //     this.authService.logout();
  //   });
  // }


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

  get modalFormPassword() {
    return this.editForm.get('modalFormPassword');
  }


  openModal(id: string) {
    console.log('id: ' + id);
    this.modalIsOpen = true;
    this.display = 'block';

  }

  closeModal() {
    this.display = 'none';
    this.modalIsOpen = false;
  }

  deleteProfile() {
    this.userStoreService.deleteUser(this.authService.currentUserID).subscribe(() => {
      this.closeModal();
      this.authService.logout().then(() => {
        alert('Profil wurde gelöscht');
      });
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserStoreService } from 'src/app/services/user-store.service';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private userStoreService: UserStoreService,
              private authService: AuthService) {

              this.registerForm = this.createRegisterForm();
  }

  ngOnInit() {
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

  registerFormSave() {
    // get data from the inputfields
    const user: User = {
      firstname: this.registerForm.value.registerFormFirstname,
      lastname: this.registerForm.value.registerFormLastname,
    };

    const mail = this.registerForm.value.registerFormMail;
    const password = this.registerForm.value.registerFormPassword;

    // create new user at Authentication
    this.authService.signUpWithMailAndPassword(mail, password).then((res) => {
      console.log('UID: ', res.user.uid);
      // create new user in cloud firestore and take the UID from the new created User
      this.userStoreService.createUser(res.user.uid, user).subscribe(() => {
        // then go to page 'home'
        this.router.navigate(['/home']);
      });
    });
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

import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserStoreService } from 'src/app/services/user-store.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private userStoreService: UserStoreService) {

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
    });
  }

  registerFormSave() {
    // get data from the inputfields
    const user: User = {
      firstname: this.registerForm.value.registerFormFirstname,
      lastname: this.registerForm.value.registerFormLastname,
      mail: this.registerForm.value.registerFormMail
    };

    // insert new user
    this.userStoreService.createUser(user).subscribe(() => {
    // then go to page 'home'
      this.router.navigate(['/home']);
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
}

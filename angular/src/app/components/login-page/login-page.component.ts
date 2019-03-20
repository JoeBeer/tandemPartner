import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;

  // for icons
  faAt = faAt;
  faLock = faLock;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService) {
    this.loginForm = this.createLoginForm();
  }

  ngOnInit() {
  }

  createLoginForm() {
    return this.formBuilder.group({
      loginFormMail: ['', Validators.required],
      loginFormPassword: ['', Validators.required]
    });
  }

  login() {
    const mail = this.loginForm.value.loginFormMail;
    const password = this.loginForm.value.loginFormPassword;

    this.authService.login(mail, password);
  }

  get loginFormMail() {
    return this.loginForm.get('loginFormMail');
  }

  get loginFormPassword() {
    return this.loginForm.get('loginFormPassword');
  }
}

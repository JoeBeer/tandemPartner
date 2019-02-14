import { UserStoreService } from 'src/app/services/user-store.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: User[];
  user: User;
  editForm: FormGroup;

  constructor(
    private userStoreService: UserStoreService,
    private formBuilder: FormBuilder) {

    this.editForm = this.createEditFormGroup();
    }

  ngOnInit() {
    this.showAllUser();
//    this.showUserById('SkcGljXTpsua8zq5aS9F');
//
//  this.editForm.get('editFormFirstname').setValue(this.user.firstname);
//  this.editForm.get('editFormLastname').setValue(this.user.lastname);
//  this.editForm.get('editFormMail').setValue(this.user.mail);
  }

  showAllUser() {
    this.userStoreService.getAllUsers().subscribe((recievedUsers: User[]) => {
      this.users = recievedUsers;
    });
  }

  showUserById(id: string) {
    this.userStoreService.getUserById(id).subscribe((recievedUser: User) => {
      this.user = recievedUser;
    });
  }

  createEditFormGroup() {
     // create the formGroup
     return this.formBuilder.group ({
      editFormFirstname: ['', Validators.required],

      editFormLastname: ['', Validators.required],

      editFormMail: ['', Validators.required],
    });
  }

  editFormSave(id: any) {
    const user: User = {
      firstname: this.editForm.value.editFormFirstname,
      lastname: this.editForm.value.editFormLastname,
      mail: this.editForm.value.editFormMail
    };

    this.userStoreService.updateUser(id, user).subscribe(() => {
      this.showAllUser();
    });
  }

}

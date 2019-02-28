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
    private formBuilder: FormBuilder,
    ) {
    // mapping the editForm on the initialzied formgroup
    this.editForm = this.createEditFormGroup();
    }

  // when home-component was called, the written methods in ngOnInit gonna start
  ngOnInit() {
    this.showAllUsers();
    this.showUserById('SkcGljXTpsua8zq5aS9F');
  }

  // get all users inkl. their attributes
  showAllUsers() {
    this.userStoreService.getAllUsers().subscribe((recievedUsers: User[]) => {
      this.users = recievedUsers;
    });
  }

  // get the user's data from the API
  showUserById(id: string) {
    this.userStoreService.getUserById(id).subscribe((recievedUser: User) => {
      this.user = recievedUser;
      this.editForm.get('editFormFirstname').setValue(this.user.firstname);
      this.editForm.get('editFormLastname').setValue(this.user.lastname);
      this.editForm.get('editFormMail').setValue(this.user.mail);
    });
  }

   // create the formGroup
  createEditFormGroup() {
     return this.formBuilder.group ({
      editFormFirstname: ['', Validators.required],

      editFormLastname: ['', Validators.required],

      editFormMail: ['', Validators.required],
    });
  }

  // when submit Button was clicked, this method gonna start
  editFormSave(id: string) {
    // mapping the input's data to the specific user attribute
    const user: User = {
      firstname: this.editForm.value.editFormFirstname,
      lastname: this.editForm.value.editFormLastname,
      mail: this.editForm.value.editFormMail
    };
    // reset the formgroup
    this.editForm.reset();
    // update the user
    this.userStoreService.updateUser(id, user).subscribe(() => {
      // when updating method is finished call the next methods for refreshing the showed data
      this.showAllUsers();
      this.showUserById('SkcGljXTpsua8zq5aS9F');
    });
  }

}

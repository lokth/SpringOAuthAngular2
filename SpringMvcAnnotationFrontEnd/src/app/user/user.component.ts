import {Component, OnInit} from '@angular/core';
import { UserService } from '../services/user.service';
import { IUser} from '../model/IUser';

@Component({
  selector: 'app-root',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {

  title = 'Home - Spring Security Annotation Example ';

  users: IUser[];
  user: IUser = <IUser> { id: null, name: '', age: 0, salary: 0};

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadAllUsers();
  }

  createUser(user) {
    this.userService.createUser(user).subscribe(response => {
        this.loadAllUsers ();
      },
      err => {
        console.log(err);
      });

  }

  updateUser(user, id) {
    this.userService.updateUser(user, id).subscribe(() => this.loadAllUsers());
  }

  private loadAllUsers () {
    this.userService.fetchAllUsers().subscribe(users => {
        this.users = users;
        // console.log(users);
      },
      err => {
        console.log(err);
      });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(() => this.loadAllUsers());
  }


  submit() {
    if (this.user.id === null) {
      console.log('Saving New User', this.user);
      this.createUser(this.user);
    } else {
      this.updateUser(this.user, this.user.id);
      console.log('User updated with id ', this.user.id);
    }
    this.reset();
  }

  edit(id) {
    console.log('id to be edited', id);
    for (let i = 0; i < this.users.length; i++) {
      if ( this.users[i].id === id ) {
        const copy = Object.assign({}, this.users[i]);
        this.user = copy;
        console.log(this.user);
        break;
      }
    }
  }

  remove(id) {
    console.log('id to be deleted', id);
    if ( this.user.id === id) { // clean form if the user to be deleted is shown there.
      this.reset();
    }
    this.deleteUser(id);
  }


  reset() {
    this.user = <IUser> {};
    console.log(this.user);
  }


}

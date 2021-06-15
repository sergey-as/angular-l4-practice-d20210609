import {Component, OnInit} from '@angular/core';
import {DataTransferService, UserService} from "../../services";
import {User} from "../../models";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  chosenUser: User;

  constructor(
    private userService: UserService,
    private dataTransferService: DataTransferService
  ) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => this.users = value);
  }

  userLift(userLifted: User) {
    this.chosenUser = userLifted;
  }

  storeUser() {
    this.dataTransferService.setState(this.chosenUser.username);
  }

}

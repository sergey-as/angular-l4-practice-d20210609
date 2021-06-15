import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "../../models";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @Input()
  user: User;

  @Output()
  userLift = new EventEmitter<User>();

  constructor() {
  }

  choseUser() {
    this.userLift.emit(this.user);
  }
}

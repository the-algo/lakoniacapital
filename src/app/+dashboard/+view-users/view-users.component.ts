import { Component, OnInit } from '@angular/core';
import { FadeInTop } from "../../shared/animations/fade-in-top.decorator";

@FadeInTop()
@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
})
export class ViewUsersComponent implements OnInit {

  userObject: UserModel[] = [];

  constructor() { }

  ngOnInit() {
    this.userObject.push(
      { userId: 1, userName: "User1", emailId: "user1@gmail.com", status: "Active" },
      { userId: 2, userName: "User2", emailId: "user2@gmail.com", status: "Active" },
      { userId: 3, userName: "User3", emailId: "user3@gmail.com", status: "Inactive" },
      { userId: 4, userName: "User4", emailId: "user4@gmail.com", status: "Inactive" },
      { userId: 5, userName: "User5", emailId: "user5@gmail.com", status: "Inactive" },
    )
  }

  onClickDelete(user: UserModel) {
    if (confirm("Are you sure, you want to delete " + user.userName)) {
      this.userObject.splice(this.userObject.indexOf(user), 1);
    }
  }

}

class UserModel {
  userId: number;
  userName: string;
  emailId: string;
  status: string;
}

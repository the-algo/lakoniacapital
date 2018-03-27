import { Component, OnInit } from '@angular/core';
import { FadeInTop } from "../../shared/animations/fade-in-top.decorator";
import { RestServiceApiService } from '../../service/rest-service-api.service';

@FadeInTop()
@Component({
  selector: 'app-activate-user',
  templateUrl: './activate-user.component.html',
})
export class ActivateUserComponent implements OnInit {

  userObject: UserModel[] = [];
  tempObject: UserModel[] = [];
  result: any;
  erMsg: string = null;
  err: boolean = true;

  constructor(private service: RestServiceApiService) { }

  ngOnInit() {
    this.getUsers();
    /* this.userObject.push(
      { userId: 1, userName: "User1", emailId: "user1@gmail.com", status: "Active" },
      { userId: 2, userName: "User2", emailId: "user2@gmail.com", status: "Active" },
      { userId: 3, userName: "User3", emailId: "user3@gmail.com", status: "Inactive" },
      { userId: 4, userName: "User4", emailId: "user4@gmail.com", status: "Inactive" },
      { userId: 5, userName: "User5", emailId: "user5@gmail.com", status: "Inactive" },
    ) */
  }

  onClickActivate(user: UserModel) {
    if (confirm("Are you sure, you want to change status of " + user.userName)) {
      var userStatus = {
        id: user._id,
        status: !user.userIsActiveByAdmin
      }

      this.service.activateUser(userStatus).subscribe(res => {
        /*         if (res.error == false) {
                  this.result = res.result;
                  this.err = res.error;
        
                  setTimeout(() => {
                    this.result = null;
                    this.err = true;
                  }, 2000);
        
                  this.getUsers();
                } */
        console.log(res);
        this.getUsers();
      })
    }
  }

  getUsers() {
    this.service.getUserList().subscribe(res => {
      if (res.error == false) {
        this.userObject = res.result;
      }
    })
  }

}

class UserModel {
  _id: string;
  userName: string;
  userEmail: string;
  userIsActive: boolean;
  userIsActiveByAdmin: boolean;
}

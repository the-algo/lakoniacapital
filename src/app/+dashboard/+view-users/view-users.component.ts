import { RestServiceApiService } from './../../service/rest-service-api.service';
import { Component, OnInit } from '@angular/core';
import { FadeInTop } from "../../shared/animations/fade-in-top.decorator";
import { ModalDirective } from "ngx-bootstrap";

@FadeInTop()
@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
})
export class ViewUsersComponent implements OnInit {

  userObject: UserModel[] = [];
  result: any;
  erMsg: string = null;
  err: boolean = true;

  constructor(private service: RestServiceApiService) { }

  ngOnInit() {
    this.getUsers();
  }

  onClickDelete(user: UserModel) {
    if (confirm("Are you sure, you want to delete " + user.userName)) {
      //this.userObject.splice(this.userObject.indexOf(user), 1);
      console.log(user);
      this.service.deleteUserFromList(user._id).subscribe(res => {
        if (res.error == false) {
          this.result = res.result;
          this.err = res.error;

          setTimeout(() => {
            this.result = null;
            this.err = true;
          }, 2000);

          this.getUsers();
        }
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

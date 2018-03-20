import { Component, OnInit } from '@angular/core';
import { FadeInTop } from "../../shared/animations/fade-in-top.decorator";

@FadeInTop()
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
})
export class ChangePasswordComponent implements OnInit {

  passwordDetails = {
    currentPassword: null,
    newPassword: null,
    confirmPassword: null
  }

  constructor() { }

  ngOnInit() {
  }

  changePassword() {
    console.log(this.passwordDetails);
  }

}

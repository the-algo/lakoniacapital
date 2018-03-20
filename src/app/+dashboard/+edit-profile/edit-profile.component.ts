import { Component, OnInit } from '@angular/core';
import { FadeInTop } from "../../shared/animations/fade-in-top.decorator";

@FadeInTop()
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
})
export class EditProfileComponent implements OnInit {

  profileDetails = {
    userName: null,
    email: null,
    currentPassword: null,
    newPassword: null,
    confirmPassword: null
  }

  constructor() { }

  ngOnInit() {
  }

  updateDetails() {
    console.log(this.profileDetails);
  }

}

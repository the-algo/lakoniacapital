import { Component, OnInit } from '@angular/core';
import { FadeInTop } from "../../shared/animations/fade-in-top.decorator";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

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

  err: boolean = false;

  profileForm: FormGroup;
  constructor(fb: FormBuilder, private router: Router) {
    this.profileForm = fb.group({
      'userName': [null, [Validators.required, Validators.pattern('^[a-zA-Z_ ]*$')]],
      'email': [null, [Validators.required, Validators.pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$')]],
      'currentPassword': [null, [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]],
      'newPassword': [null, [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]],
      'confirmPassword': [null, [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]]
    });
  }

  ngOnInit() {
  }

  updateDetails() {
    if (this.profileDetails.newPassword != this.profileDetails.confirmPassword) {
      this.err = true;
      return;
    }
    this.err = false;
    console.log(this.profileDetails);
  }


  lettersOnly(event: any) {
    const pattern = /[a-zA-Z ]/;
    //const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.charCode == 0) {

    } else
      if (!pattern.test(inputChar)) {
        // invalid character, prevent input
        event.preventDefault();
      }
  }

}

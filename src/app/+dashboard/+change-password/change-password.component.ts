import { Component, OnInit } from '@angular/core';
import { FadeInTop } from "../../shared/animations/fade-in-top.decorator";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

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

  err: boolean = false;

  passwordForm: FormGroup;
  constructor(fb: FormBuilder, private router: Router) {
    this.passwordForm = fb.group({
      'currentPassword': [null, [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]],
      'newPassword': [null, [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]],
      'confirmPassword': [null, [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]]
    });
  }

  ngOnInit() {
  }

  changePassword() {
    if (this.passwordDetails.newPassword != this.passwordDetails.confirmPassword) {
      this.err = true;
      return;
    }
    this.err = false;
    console.log(this.passwordDetails);
  }

}

import { Component, OnInit } from '@angular/core';
import { FadeInTop } from "../../shared/animations/fade-in-top.decorator";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { RestServiceApiService } from '../../service/rest-service-api.service';
import { SessionService } from '../../service/session.service';

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
  result: any;
  erMsg: string = null;
  errStatus: boolean = true;

  passwordForm: FormGroup;
  constructor(fb: FormBuilder, private router: Router, private service: RestServiceApiService, private session: SessionService) {
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
    var password = {
      newPassword: this.passwordDetails.newPassword,
      oldPassword: this.passwordDetails.currentPassword
    }

    this.service.updateUserPassword(password).subscribe(res => {
      if (res) {
        //console.log(res);
        this.result = res.result;
        this.errStatus = res.error;

        setTimeout(() => {
          this.result = null;
          if (!this.errStatus) {
            this.errStatus = false;
            this.session.clearSession();
            return;
          }
          this.errStatus = true;

        }, 2000);

      }
    })

    console.log(this.passwordDetails);
  }

}

import { Component, OnInit } from '@angular/core';
import { FadeInTop } from "../../shared/animations/fade-in-top.decorator";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { SessionService } from '../../service/session.service';
import { RestServiceApiService } from '../../service/rest-service-api.service';

@FadeInTop()
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
})
export class EditProfileComponent implements OnInit {

  profileDetails = {
    userName: null,
    email: null,
    currentPassword: null
  }


  err: boolean = false;
  result: any;
  erMsg: string = null;
  errStatus: boolean = true;

  profileForm: FormGroup;
  constructor(fb: FormBuilder, private router: Router, private session: SessionService, private service: RestServiceApiService) {
    this.profileForm = fb.group({
      'userName': [null, [Validators.required, Validators.pattern('^[a-zA-Z_ ]*$')]],
      'email': [null, [Validators.required, Validators.pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$')]],
      'currentPassword': [null, [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]]
    });

    var details = JSON.parse(sessionStorage.getItem("jsakfjaslhsfjkaldshfjkdslfhjsdll"));

    if (details) {
      this.profileDetails.userName = details.userName;
      this.profileDetails.email = details.userEmail;
    } else {
      this.session.clearSession();
    }
  }

  ngOnInit() {
  }

  updateDetails() {
    this.err = false;

    var details = {
      username: this.profileDetails.userName,
      password: this.profileDetails.currentPassword
    }

    this.service.updateUsername(details).subscribe(res => {
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

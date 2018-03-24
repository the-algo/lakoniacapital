import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { JsonApiService } from '../../core/api/json-api.service';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { RestServiceApiService } from '../../service/rest-service-api.service';
import { SessionService } from '../../service/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginDetails = {
    userName: null,
    password: null
  };
  err: boolean = false;
  message: string = null;
  erMsg: string = null;

  loginForm: FormGroup;
  constructor(fb: FormBuilder, private router: Router, private service: RestServiceApiService, private session: SessionService) {
    this.loginForm = fb.group({
      'userName': [null, [Validators.required, Validators.pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$')]],
      'password': [null, [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]],
    });
  }

  //constructor(private router: Router, public jsonApiService: JsonApiService) { }

  ngOnInit() {
  }

  login(event) {
    /*     var data = {
          userName: "adtech",
          password: "adtech123"
        } */

    // event.preventDefault();
    //this.jsonApiService.fetch("login/").subscribe();
    this.loginDetails.userName = this.loginDetails.userName.toLocaleLowerCase();

    if (this.loginDetails) {
      this.service.signIn(this.loginDetails).subscribe(res => {
        if (res.error == false) {
          if (!res.userDetail.userIsActive) {
            this.erMsg = res.message;
            return;
          }

          this.message = res.result;
          this.session.setSession(res);
          this.router.navigate(['/dashboard/home']);

        } else {
          this.erMsg = res.message;
        }

        if (this.erMsg) {
          setTimeout(() => {
            this.erMsg = null;
            window.location.reload();
          }, 5000);

          return;
        }
      });

    } else {
      window.location.reload();
      event.preventDefault();
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { JsonApiService } from '../../core/api/json-api.service';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

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

  loginForm: FormGroup;
  constructor(fb: FormBuilder, private router: Router) {
    this.loginForm = fb.group({
      'userName': [null, [Validators.required, Validators.pattern('^[a-zA-Z_ ]*$')]],
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
    console.log(this.loginDetails)
    event.preventDefault();
    this.router.navigate(['/dashboard'])
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

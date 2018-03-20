import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  registrationDetails = {
    userName: null,
    email: null,
    password: null,
    confirmPassword: null
  };
  err: boolean = false;

  registerForm: FormGroup;
  constructor(fb: FormBuilder, private router: Router) {
    this.registerForm = fb.group({
      'userName': [null, [Validators.required, Validators.pattern('^[a-zA-Z_ ]*$')]],
      'email': [null, [Validators.required, Validators.pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$')]],
      'password': [null, [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]],
      'confirmPassword': [null, [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]]
    });
  }


  ngOnInit() {
  }

  register(event) {
    if (this.registrationDetails.password != this.registrationDetails.confirmPassword) {
      this.err = true;
      return;
    }
    this.err = false;
    this.registrationDetails.email = this.registrationDetails.email.toLocaleLowerCase();

    console.log(this.registrationDetails);
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
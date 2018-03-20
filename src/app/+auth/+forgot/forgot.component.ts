import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styles: []
})
export class ForgotComponent implements OnInit {
  forgotPasswordDetails = {
    email: null
  };
  err: boolean = false;

  forgotPasswordForm: FormGroup;
  constructor(fb: FormBuilder, private router: Router) {
    this.forgotPasswordForm = fb.group({
      'email': [null, [Validators.required, Validators.pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$')]]
    });
  }

  ngOnInit() {
  }

  submit(event) {
    console.log(this.forgotPasswordDetails);
    event.preventDefault();
    this.router.navigate(['/dashboard/home'])
  }
}

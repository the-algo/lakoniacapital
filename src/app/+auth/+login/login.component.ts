import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { JsonApiService } from '../../core/api/json-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, public jsonApiService: JsonApiService) { }

  ngOnInit() {
  }

  login(event) {
    /*     var data = {
          userName: "adtech",
          password: "adtech123"
        } */

    // event.preventDefault();
    //this.jsonApiService.fetch("login/").subscribe();
    event.preventDefault();
    this.router.navigate(['/dashboard'])
  }

}

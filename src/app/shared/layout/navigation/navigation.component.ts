import { Component, OnInit } from '@angular/core';
import { LoginInfoComponent } from "../../user/login-info/login-info.component";
import { Router } from '@angular/router';

@Component({

  selector: 'sa-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {

  id: number = null;
  constructor(private router: Router) {
    if (JSON.parse(sessionStorage.getItem("jsakfjaslhsfjkaldshfjkdslfhjsdll"))) {
      var data = JSON.parse(sessionStorage.getItem("jsakfjaslhsfjkaldshfjkdslfhjsdll"));
      this.id = data.userRoleId;
    } else {
      this.router.navigate(['/auth/login']);
    }
  }

  ngOnInit() {
  }

}

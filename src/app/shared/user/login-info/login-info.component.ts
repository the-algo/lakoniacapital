import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({

  selector: 'sa-login-info',
  templateUrl: './login-info.component.html',
})
export class LoginInfoComponent implements OnInit {

  userName: string;

  constructor(private router: Router) {
    if (JSON.parse(sessionStorage.getItem("jsakfjaslhsfjkaldshfjkdslfhjsdll"))) {
      var data = JSON.parse(sessionStorage.getItem("jsakfjaslhsfjkaldshfjkdslfhjsdll"));
      this.userName = data.userName;
    } else {
      this.router.navigate(['/auth/login']);
    }
  }

  ngOnInit() {
    /*     this.userService.getLoginInfo().subscribe(user => {
          this.user = user
        }) */
  }

  /*   toggleShortcut() {
      this.layoutService.onShortcutToggle()
    } */

}

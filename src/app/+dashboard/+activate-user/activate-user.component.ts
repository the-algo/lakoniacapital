import { Component, OnInit } from '@angular/core';
import { FadeInTop } from "../../shared/animations/fade-in-top.decorator";

@FadeInTop()
@Component({
  selector: 'app-activate-user',
  templateUrl: './activate-user.component.html',
})
export class ActivateUserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

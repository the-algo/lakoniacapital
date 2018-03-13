import { Component, OnInit } from '@angular/core';
import { FadeInTop } from "../../shared/animations/fade-in-top.decorator";

@FadeInTop()
@Component({
  selector: 'app-renew-details',
  templateUrl: './renew-details.component.html',
})
export class RenewDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

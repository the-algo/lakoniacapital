import { Component, OnInit } from '@angular/core';
import { FadeInTop } from "../../shared/animations/fade-in-top.decorator";

@FadeInTop()
@Component({
  selector: 'app-view-reports',
  templateUrl: './view-reports.component.html',
})
export class ViewReportsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

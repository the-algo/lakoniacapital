import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewUserSubscriptionReportComponent } from "./user-subscription-report.component";

const routes: Routes = [{
  path: '',
  component: ViewUserSubscriptionReportComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ViewUserSubscriptionReportRoutingModule { }

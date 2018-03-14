import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewDailySubscriptionReportComponent } from "./daily-subscription-report.component";

const routes: Routes = [{
  path: '',
  component: ViewDailySubscriptionReportComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ViewDailySubscriptionReportRoutingModule { }

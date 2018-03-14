import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewUserSubscriptionReportRoutingModule } from './user-subscription-report-routing.module';
import { ViewUserSubscriptionReportComponent } from './user-subscription-report.component';
import { SmartadminLayoutModule } from "../../shared/layout/layout.module";
import { StatsModule } from "../../shared/stats/stats.module";
import { SmartadminWidgetsModule } from "../../shared/widgets/smartadmin-widgets.module";

@NgModule({
  imports: [
    CommonModule,
    ViewUserSubscriptionReportRoutingModule,
    SmartadminLayoutModule,
    StatsModule,
    SmartadminWidgetsModule,
  ],
  declarations: [ViewUserSubscriptionReportComponent]
})
export class ViewUserSubscriptionReportModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewDailySubscriptionReportRoutingModule } from './daily-subscription-report-routing.module';
import { ViewDailySubscriptionReportComponent } from './daily-subscription-report.component';
import { SmartadminLayoutModule } from "../../shared/layout/layout.module";
import { StatsModule } from "../../shared/stats/stats.module";
import { SmartadminWidgetsModule } from "../../shared/widgets/smartadmin-widgets.module";
import { ChartJsModule } from "../../shared/graphs/chart-js/chart-js.module";

@NgModule({
  imports: [
    CommonModule,
    ViewDailySubscriptionReportRoutingModule,
    SmartadminLayoutModule,
    StatsModule,
    SmartadminWidgetsModule,
    ChartJsModule
  ],
  declarations: [ViewDailySubscriptionReportComponent]
})
export class ViewDailySubscriptionReportModule { }

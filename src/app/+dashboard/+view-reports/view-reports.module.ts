import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewReportsRoutingModule } from './view-reports-routing.module';
import { ViewReportsComponent } from './view-reports.component';
import { SmartadminLayoutModule } from "../../shared/layout/layout.module";
import { StatsModule } from "../../shared/stats/stats.module";
import { SmartadminWidgetsModule } from "../../shared/widgets/smartadmin-widgets.module";

@NgModule({
  imports: [
    CommonModule,
    ViewReportsRoutingModule,
    SmartadminLayoutModule,
    StatsModule,
    SmartadminWidgetsModule,
  ],
  declarations: [ViewReportsComponent]
})
export class ViewReportsModule { }

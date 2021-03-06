import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewSearchReportRoutingModule } from './search-report-routing.module';
import { ViewSearchReportComponent } from './search-report.component';
import { SmartadminLayoutModule } from "../../shared/layout/layout.module";
import { StatsModule } from "../../shared/stats/stats.module";
import { SmartadminWidgetsModule } from "../../shared/widgets/smartadmin-widgets.module";
/* import { MyDatePickerModule } from 'mydatepicker'; */
import { SmartadminInputModule } from "../../shared/forms/input/smartadmin-input.module";
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ViewSearchReportRoutingModule,
    SmartadminLayoutModule,
    StatsModule,
    SmartadminWidgetsModule,
    SmartadminInputModule,
    /*     MyDatePickerModule, */
    FormsModule
  ],
  declarations: [ViewSearchReportComponent]
})
export class ViewSearchReportModule { }

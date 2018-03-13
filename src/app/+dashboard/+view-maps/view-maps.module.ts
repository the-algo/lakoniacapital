import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewMapsRoutingModule } from './view-maps-routing.module';
import { ViewMapsComponent } from './view-maps.component';
import { SmartadminLayoutModule } from "../../shared/layout/layout.module";
import { StatsModule } from "../../shared/stats/stats.module";
import { SmartadminWidgetsModule } from "../../shared/widgets/smartadmin-widgets.module";
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ViewMapsRoutingModule,
    FormsModule,
    SmartadminLayoutModule,
    StatsModule,
    SmartadminWidgetsModule,
  ],
  declarations: [ViewMapsComponent]
})
export class ViewMapsModule { }

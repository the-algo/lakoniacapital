import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenewMapRoutingModule } from './renew-map-routing.module';
import { RenewMapComponent } from './renew-map.component';
import { SmartadminLayoutModule } from "../../shared/layout/layout.module";
import { StatsModule } from "../../shared/stats/stats.module";
import { SmartadminWidgetsModule } from "../../shared/widgets/smartadmin-widgets.module";
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RenewMapRoutingModule,
    FormsModule,
    SmartadminLayoutModule,
    StatsModule,
    SmartadminWidgetsModule,
  ],
  declarations: [RenewMapComponent]
})
export class RenewMapModule { }

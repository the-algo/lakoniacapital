import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenewDetailsRoutingModule } from './renew-details-routing.module';
import { RenewDetailsComponent } from './renew-details.component';
import { SmartadminLayoutModule } from "../../shared/layout/layout.module";
import { StatsModule } from "../../shared/stats/stats.module";
import { SmartadminWidgetsModule } from "../../shared/widgets/smartadmin-widgets.module";
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RenewDetailsRoutingModule,
    FormsModule,
    SmartadminLayoutModule,
    StatsModule,
    SmartadminWidgetsModule,
  ],
  declarations: [RenewDetailsComponent]
})
export class RenewDetailsModule { }

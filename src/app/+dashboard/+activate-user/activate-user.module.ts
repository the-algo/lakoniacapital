import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivateUserRoutingModule } from './activate-user-routing.module';
import { ActivateUserComponent } from './activate-user.component';
import { SmartadminLayoutModule } from "../../shared/layout/layout.module";
import { StatsModule } from "../../shared/stats/stats.module";
import { SmartadminWidgetsModule } from "../../shared/widgets/smartadmin-widgets.module";

@NgModule({
  imports: [
    CommonModule,
    ActivateUserRoutingModule,

    SmartadminLayoutModule,
    StatsModule,
    SmartadminWidgetsModule,
  ],
  declarations: [ActivateUserComponent]
})
export class ActivateUserModule { }

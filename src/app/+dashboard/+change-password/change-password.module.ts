import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangePasswordRoutingModule } from './change-password-routing.module';
import { ChangePasswordComponent } from './change-password.component';
import { SmartadminLayoutModule } from "../../shared/layout/layout.module";
import { StatsModule } from "../../shared/stats/stats.module";
import { SmartadminWidgetsModule } from "../../shared/widgets/smartadmin-widgets.module";

@NgModule({
  imports: [
    CommonModule,
    ChangePasswordRoutingModule,

    SmartadminLayoutModule,
    StatsModule,
    SmartadminWidgetsModule,
  ],
  declarations: [ChangePasswordComponent]
})
export class ChangePasswordModule { }

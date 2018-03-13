import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewUsersRoutingModule } from './view-users-routing.module';
import { ViewUsersComponent } from './view-users.component';
import { SmartadminLayoutModule } from "../../shared/layout/layout.module";
import { StatsModule } from "../../shared/stats/stats.module";
import { SmartadminWidgetsModule } from "../../shared/widgets/smartadmin-widgets.module";
import { SmartadminDatatableModule } from "../../shared/ui/datatable/smartadmin-datatable.module";

@NgModule({
  imports: [
    CommonModule,
    ViewUsersRoutingModule,
    SmartadminDatatableModule,
    SmartadminLayoutModule,
    StatsModule,
    SmartadminWidgetsModule,
  ],
  declarations: [ViewUsersComponent]
})
export class ViewUsersModule { }

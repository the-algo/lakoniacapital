import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenewSelectedMapRoutingModule } from './renew-selected-map-routing.module';
import { RenewSelectedMapComponent } from './renew-selected-map.component';
import { SmartadminLayoutModule } from "../../shared/layout/layout.module";
import { StatsModule } from "../../shared/stats/stats.module";
import { SmartadminWidgetsModule } from "../../shared/widgets/smartadmin-widgets.module";
import { SmartadminWizardsModule } from "../../shared/forms/wizards/smartadmin-wizards.module";
import { SmartadminModule } from "../../shared/smartadmin.module";
import { SmartadminInputModule } from "../../shared/forms/input/smartadmin-input.module";
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    RenewSelectedMapRoutingModule,
    SmartadminWizardsModule,
    SmartadminLayoutModule,
    StatsModule,
    SmartadminWidgetsModule,
    FormsModule,
    SmartadminModule,
    SmartadminInputModule
  ],
  declarations: [RenewSelectedMapComponent]
})
export class RenewSelectedMapModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateMapRoutingModule } from './create-map-routing.module';
import { CreateMapComponent } from './create-map.component';
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
    CreateMapRoutingModule,
    SmartadminWizardsModule,
    SmartadminLayoutModule,
    StatsModule,
    SmartadminWidgetsModule,
    FormsModule,
    SmartadminModule,
    SmartadminInputModule
  ],
  declarations: [CreateMapComponent]
})
export class CreateMapModule { }

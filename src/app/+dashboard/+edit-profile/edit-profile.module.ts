import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileRoutingModule } from './edit-profile-routing.module';
import { EditProfileComponent } from './edit-profile.component';
import { SmartadminLayoutModule } from "../../shared/layout/layout.module";
import { StatsModule } from "../../shared/stats/stats.module";
import { SmartadminWidgetsModule } from "../../shared/widgets/smartadmin-widgets.module";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SmartadminModule } from "../../shared/smartadmin.module";

@NgModule({
  imports: [
    CommonModule,
    EditProfileRoutingModule,
    FormsModule,
    SmartadminLayoutModule,
    StatsModule,
    SmartadminWidgetsModule,
    ReactiveFormsModule,
    SmartadminModule
  ],
  declarations: [EditProfileComponent]
})
export class EditProfileModule { }

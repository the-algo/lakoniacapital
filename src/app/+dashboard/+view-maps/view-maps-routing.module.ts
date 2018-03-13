import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewMapsComponent } from "./view-maps.component";

const routes: Routes = [{
  path: '',
  component: ViewMapsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ViewMapsRoutingModule { }

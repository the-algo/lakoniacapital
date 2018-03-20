import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateMapComponent } from "./create-map.component";

const routes: Routes = [{
  path: '',
  component: CreateMapComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CreateMapRoutingModule { }

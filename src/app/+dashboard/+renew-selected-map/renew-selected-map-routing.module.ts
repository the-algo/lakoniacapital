import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RenewSelectedMapComponent } from "./renew-selected-map.component";

const routes: Routes = [{
  path: '',
  component: RenewSelectedMapComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class RenewSelectedMapRoutingModule { }

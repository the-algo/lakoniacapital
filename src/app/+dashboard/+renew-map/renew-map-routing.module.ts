import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RenewMapComponent } from "./renew-map.component";

const routes: Routes = [{
  path: '',
  component: RenewMapComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class RenewMapRoutingModule { }

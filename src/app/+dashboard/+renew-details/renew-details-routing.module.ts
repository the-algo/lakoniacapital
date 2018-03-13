import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RenewDetailsComponent } from "./renew-details.component";

const routes: Routes = [{
  path: '',
  component: RenewDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class RenewDetailsRoutingModule { }

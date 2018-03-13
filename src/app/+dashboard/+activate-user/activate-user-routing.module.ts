import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivateUserComponent } from "./activate-user.component";

const routes: Routes = [{
  path: '',
  component: ActivateUserComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ActivateUserRoutingModule { }

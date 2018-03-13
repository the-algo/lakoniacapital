import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewReportsComponent } from "./view-reports.component";

const routes: Routes = [{
  path: '',
  component: ViewReportsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ViewReportsRoutingModule { }

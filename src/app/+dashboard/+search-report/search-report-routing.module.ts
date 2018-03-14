import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewSearchReportComponent } from "./search-report.component";

const routes: Routes = [{
  path: '',
  component: ViewSearchReportComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ViewSearchReportRoutingModule { }

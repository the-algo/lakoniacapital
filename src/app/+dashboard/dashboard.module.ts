import { NgModule } from '@angular/core';

import { SmartadminModule } from '../shared/smartadmin.module';

import { routing } from './dashboard.routing';
import { RestServiceApiService } from '../service/rest-service-api.service';


@NgModule({
  imports: [
    SmartadminModule,
    routing
  ],
  declarations: [],
  providers: [RestServiceApiService],
})
export class DashboardModule {

}

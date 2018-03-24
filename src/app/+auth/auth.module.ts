import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from "./auth.routing";
import { AuthComponent } from './auth.component';
import { RestServiceApiService } from '../service/rest-service-api.service';

@NgModule({
  imports: [
    CommonModule,
    routing,
  ],
  declarations: [AuthComponent],
  providers: [RestServiceApiService]
})
export class AuthModule { }

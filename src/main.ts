import './lib'

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {bootstrap} from 'angular2/platform/browser';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);

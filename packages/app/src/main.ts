import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { Auth } from '@aws-amplify/auth';
import { configureApi } from '@vocably/api';
import { maintainAppHeight } from './app-height';
import { authConfig } from './auth-config';

if (environment.production) {
  enableProdMode();
}

Auth.configure(authConfig);

configureApi(environment.api);

maintainAppHeight();

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

window.dispatchEvent(new Event('piu'));

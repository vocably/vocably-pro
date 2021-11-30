import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { Auth } from '@aws-amplify/auth';
import { AppAuthStorage } from 'aws-cognito-chrome-extension';
import { configureClient } from '@vocably/api';

console.log(environment);

if (environment.production) {
  enableProdMode();
}

Auth.configure({
  storage: new AppAuthStorage(environment.chromeExtensionId),
  ...environment.auth,
});

configureClient(environment.api);

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

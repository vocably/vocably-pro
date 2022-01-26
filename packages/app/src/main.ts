import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { Auth } from '@aws-amplify/auth';
import { AppAuthStorage } from '@vocably/pontis';
import { configureApi } from '@vocably/api';

if (environment.production) {
  enableProdMode();
}

Auth.configure({
  storage: new AppAuthStorage(environment.chromeExtensionId),
  ...environment.auth,
});

configureApi(environment.api);

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
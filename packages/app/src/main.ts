import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { Amplify } from 'aws-amplify';
import { AppAuthStorage } from 'aws-cognito-chrome-extension';

if (environment.production) {
  enableProdMode();
}

Amplify.configure({
  Auth: {
    storage: new AppAuthStorage(environment.chromeExtensionId),
    ...environment.auth,
  },
});

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { Amplify } from 'aws-amplify';
import { ExtensionStorage } from './extension/storage';

if (environment.production) {
  enableProdMode();
}

Amplify.configure({
  Auth: {
    storage: new ExtensionStorage(),
    ...environment.auth,
  },
});

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { Amplify, Hub } from 'aws-amplify';
import { sendSession } from './extension/sendSession';

if (environment.production) {
  enableProdMode();
}

Amplify.configure({
  Auth: environment.auth,
});

Hub.listen('auth', async (capsule) => {
  if (capsule.payload.event === 'signIn') {
    await sendSession();
  }
});

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

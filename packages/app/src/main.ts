import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { Auth } from '@aws-amplify/auth';
import * as Sentry from '@sentry/angular';
import { BrowserTracing } from '@sentry/tracing';
import { configureApi } from '@vocably/api';
import { maintainAppSize } from './app-size';
import { AppModule } from './app/app.module';
import { authConfig } from './auth-config';
import { environment } from './environments/environment';
import { extensionId } from './extension-id';

console.log('extensionId', extensionId);

Sentry.init({
  environment: environment.sentryEnvironment,
  dsn: 'https://3e78a7263b224f07a7316c655d40a415@o1191770.ingest.sentry.io/6313273',
  integrations: [
    new BrowserTracing({
      routingInstrumentation: Sentry.routingInstrumentation,
    }),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

if (environment.production) {
  enableProdMode();
}

Auth.configure(authConfig);

configureApi(environment.api);

maintainAppSize();

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

// @ts-ignore
browser.runtime.sendMessage(
  'pro.vocably.app.Vocably-for-Safari (X2D37S38M5)',
  { greeting: 'Hello!' },
  function (response: any) {
    console.log('Received response from the background page:');
    console.log(response);
  }
);

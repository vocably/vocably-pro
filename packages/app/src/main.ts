import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { Auth } from '@aws-amplify/auth';
import { AppAuthStorage } from 'aws-cognito-chrome-extension';
import { configureClient } from '@vocably/api';

import {
  S3Client,
  GetObjectCommand,
  PutObjectCommand,
  S3ClientConfig,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

if (environment.production) {
  enableProdMode();
}

Auth.configure({
  storage: new AppAuthStorage(environment.chromeExtensionId),
  ...environment.auth,
});

const putObject = () =>
  Auth.currentUserCredentials().then(async (credentials) => {
    console.log(credentials);

    const s3Configuration: S3ClientConfig = {
      credentials: credentials,
      region: 'eu-central-1',
    };
    const s3 = new S3Client(s3Configuration);
    const url = await getSignedUrl(
      s3,
      new PutObjectCommand({
        Bucket: 'vocably-default-cards',
        Key: 'eu-central-1:acd8c175-7270-4f58-a683-33f0abea919a/en',
      }),
      { expiresIn: 15 * 60 }
    ); // expires in seconds

    await fetch(url, {
      method: 'PUT',
      body: `["a", "a1", ${+new Date()}]`,
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(console.log);
  });

const getObject = () =>
  Auth.currentUserCredentials().then(async (credentials) => {
    console.log(credentials);

    const s3Configuration: S3ClientConfig = {
      credentials: credentials,
      region: 'eu-central-1',
    };
    const s3 = new S3Client(s3Configuration);
    const url = await getSignedUrl(
      s3,
      new GetObjectCommand({
        Bucket: 'vocably-default-cards',
        Key: 'eu-central-1:acd8c175-7270-4f58-a683-33f0abea919a/en',
      }),
      { expiresIn: 15 * 60 }
    ); // expires in seconds

    await fetch(url)
      .then((response) => response.json())
      .then(console.log);
  });

getObject()
  .then(() => putObject())
  .then(() => getObject());

configureClient(environment.api);

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

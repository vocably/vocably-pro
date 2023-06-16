import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { IonicModule } from '@ionic/angular';
import * as Sentry from '@sentry/angular';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { ComponentsModule } from './components/components.module';
import { HeaderModule } from './header/header.module';
import { AndroidPageComponent } from './pages/android-page/android-page.component';
import { IosPageComponent } from './pages/ios-page/ios-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { DeleteAccountConfirmationComponent } from './pages/settings-page/delete-account-confirmation/delete-account-confirmation.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    IosPageComponent,
    AndroidPageComponent,
    SettingsPageComponent,
    DeleteAccountConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule,
    HeaderModule,
    ComponentsModule,
    IonicModule.forRoot({
      mode: 'md',
      statusTap: true,
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    MatSnackBarModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatDividerModule,
  ],
  providers: [
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler({
        showDialog: false,
      }),
    },
    {
      provide: Sentry.TraceService,
      deps: [Router],
    },
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => {},
      deps: [Sentry.TraceService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

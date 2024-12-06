import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import * as Sentry from '@sentry/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { ComponentsModule } from './components/components.module';
import { HeaderModule } from './header/header.module';
import { FeedbackPageComponent } from './pages/feedback-page/feedback-page.component';
import { ImportPageComponent } from './pages/import-page/import-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { DeleteAccountConfirmationComponent } from './pages/settings-page/delete-account-confirmation/delete-account-confirmation.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { TagsModule } from './tags/tags.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    SettingsPageComponent,
    DeleteAccountConfirmationComponent,
    FeedbackPageComponent,
    ImportPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule,
    HeaderModule,
    ComponentsModule,
    FormsModule,
    IonicModule.forRoot({
      mode: 'md',
      statusTap: true,
    }),
    MatSnackBarModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatDividerModule,
    MatChipsModule,
    TagsModule,
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { HeaderModule } from '../header/header.module';
import { AutoSignInPageComponent } from './pages/auto-sign-in-page/auto-sign-in-page.component';
import { IonicModule } from '@ionic/angular';
import { SignInSuccessPageComponent } from './pages/sign-in-success-page/sign-in-success-page.component';

@NgModule({
  declarations: [
    SignInPageComponent,
    AutoSignInPageComponent,
    SignInSuccessPageComponent,
  ],
  imports: [CommonModule, HeaderModule, IonicModule],
  exports: [],
})
export class AuthModule {}

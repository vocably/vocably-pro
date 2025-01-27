import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../components/components.module';
import { HeaderModule } from '../header/header.module';
import { AutoSignInSuccessPageComponent } from './pages/auto-sign-in-success-page/auto-sign-in-success-page.component';
import { HandsFreePageComponent } from './pages/hands-free-page/hands-free-page.component';
import { ManualSignInSuccessPageComponent } from './pages/manual-sign-in-success-page/manual-sign-in-success-page.component';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { SignOutPageComponent } from './pages/sign-out-page/sign-out-page.component';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [
    SignInPageComponent,
    HandsFreePageComponent,
    SignOutPageComponent,
    SignInComponent,
    AutoSignInSuccessPageComponent,
    ManualSignInSuccessPageComponent,
  ],
  imports: [
    CommonModule,
    HeaderModule,
    IonicModule,
    ComponentsModule,
    MatIconModule,
  ],
  exports: [
    HandsFreePageComponent,
    AutoSignInSuccessPageComponent,
    ManualSignInSuccessPageComponent,
    SignInComponent,
  ],
})
export class AuthModule {}

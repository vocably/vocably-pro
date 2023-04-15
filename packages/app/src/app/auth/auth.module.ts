import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { HeaderModule } from '../header/header.module';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../components/components.module';
import { HandsFreePageComponent } from './pages/hands-free-page/hands-free-page.component';
import { SignInSuccessPageComponent } from './pages/sign-in-success-page/sign-in-success-page.component';
import { SignOutPageComponent } from './pages/sign-out-page/sign-out-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    SignInPageComponent,
    HandsFreePageComponent,
    SignInSuccessPageComponent,
    SignOutPageComponent,
    SignInComponent,
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
    SignInSuccessPageComponent,
    SignInComponent,
  ],
})
export class AuthModule {}

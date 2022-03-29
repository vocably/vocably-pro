import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { HeaderModule } from '../header/header.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [SignInPageComponent],
  imports: [CommonModule, HeaderModule, IonicModule],
  exports: [],
})
export class AuthModule {}

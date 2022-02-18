import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HeaderModule } from '../header/header.module';
import { AutoLoginPageComponent } from './pages/auto-login-page/auto-login-page.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [LoginPageComponent, AutoLoginPageComponent],
  imports: [CommonModule, HeaderModule, IonicModule],
  exports: [],
})
export class AuthModule {}

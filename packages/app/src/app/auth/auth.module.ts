import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HeaderModule } from '../header/header.module';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [CommonModule, HeaderModule],
  exports: [],
})
export class AuthModule {}

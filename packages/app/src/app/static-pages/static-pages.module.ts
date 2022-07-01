import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../components/components.module';
import { HeaderModule } from '../header/header.module';
import { StaticPagesRoutingModule } from './static-pages-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthModule } from '../auth/auth.module';
import { UserInfoPageComponent } from './user-info-page/user-info-page.component';

@NgModule({
  declarations: [WelcomeComponent, UserInfoPageComponent],
  imports: [
    CommonModule,
    StaticPagesRoutingModule,
    IonicModule,
    ComponentsModule,
    HeaderModule,
    AuthModule,
  ],
  exports: [],
})
export class StaticPagesModule {}

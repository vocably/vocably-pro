import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../components/components.module';
import { SubscribePageComponent } from './pages/subscribe-page/subscribe-page.component';
import { SubscriptionRoutingModule } from './subscription-routing.module';
import { HeaderModule } from '../header/header.module';
import { ManagePageComponent } from './pages/manage-page/manage-page.component';

@NgModule({
  declarations: [SubscribePageComponent, ManagePageComponent],
  imports: [
    CommonModule,
    IonicModule,
    ComponentsModule,
    SubscriptionRoutingModule,
    HeaderModule,
  ],
  exports: [],
})
export class SubscriptionModule {}

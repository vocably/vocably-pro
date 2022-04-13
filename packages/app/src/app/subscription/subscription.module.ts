import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../components/components.module';
import { SubscribePageComponent } from './pages/subscribe-page/subscribe-page.component';
import { SubscriptionRoutingModule } from './subscription-routing.module';
import { HeaderModule } from '../header/header.module';
import { ManagePageComponent } from './pages/manage-page/manage-page.component';
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';
import { AutoSubscribePageComponent } from './pages/auto-subscribe-page/auto-subscribe-page.component';
import { SubscriptionProductComponent } from './subscription-product/subscription-product.component';
import { SubscriptionFlowComponent } from './subscription-flow/subscription-flow.component';

@NgModule({
  declarations: [
    SubscribePageComponent,
    ManagePageComponent,
    SubscriptionFormComponent,
    AutoSubscribePageComponent,
    SubscriptionProductComponent,
    SubscriptionFlowComponent,
  ],
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

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../components/components.module';
import { HeaderModule } from '../header/header.module';
import { MonthsPipe } from './months.pipe';
import { AutoSubscribePageComponent } from './pages/auto-subscribe-page/auto-subscribe-page.component';
import { ManagePageComponent } from './pages/manage-page/manage-page.component';
import { SubscribePageComponent } from './pages/subscribe-page/subscribe-page.component';
import { SavingPipe } from './saving.pipe';
import { SubscriptionFlowComponent } from './subscription-flow/subscription-flow.component';
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';
import { SubscriptionProductComponent } from './subscription-product/subscription-product.component';
import { SubscriptionRoutingModule } from './subscription-routing.module';

@NgModule({
  declarations: [
    SubscribePageComponent,
    ManagePageComponent,
    SubscriptionFormComponent,
    AutoSubscribePageComponent,
    SubscriptionProductComponent,
    SubscriptionFlowComponent,
    MonthsPipe,
    SavingPipe,
  ],
  imports: [
    CommonModule,
    IonicModule,
    ComponentsModule,
    SubscriptionRoutingModule,
    HeaderModule,
    MatIconModule,
  ],
  exports: [],
})
export class SubscriptionModule {}

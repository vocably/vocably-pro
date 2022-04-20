import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../components/components.module';
import { HeaderModule } from '../header/header.module';
import { TermsOfServicePageComponent } from './terms-of-service-page/terms-of-service-page.component';
import { PrivacyPolicyPageComponent } from './privacy-policy-page/privacy-policy-page.component';
import { StaticPagesRoutingModule } from './static-pages-routing.module';

@NgModule({
  declarations: [TermsOfServicePageComponent, PrivacyPolicyPageComponent],
  imports: [
    CommonModule,
    StaticPagesRoutingModule,
    IonicModule,
    ComponentsModule,
    HeaderModule,
  ],
  exports: [],
})
export class StaticPagesModule {}

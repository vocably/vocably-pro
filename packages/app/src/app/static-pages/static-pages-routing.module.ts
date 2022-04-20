import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TermsOfServicePageComponent } from './terms-of-service-page/terms-of-service-page.component';
import { PrivacyPolicyPageComponent } from './privacy-policy-page/privacy-policy-page.component';

const routes: Routes = [
  {
    path: 'terms-of-service',
    component: TermsOfServicePageComponent,
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaticPagesRoutingModule {}

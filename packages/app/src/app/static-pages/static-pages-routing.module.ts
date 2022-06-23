import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TermsAndConditionsPageComponent } from './terms-and-conditions-page/terms-and-conditions-page.component';
import { PrivacyPolicyPageComponent } from './privacy-policy-page/privacy-policy-page.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserInfoPageComponent } from './user-info-page/user-info-page.component';

const routes: Routes = [
  {
    path: 'terms-and-conditions',
    component: TermsAndConditionsPageComponent,
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyPageComponent,
  },
  {
    path: 'welcome',
    title: 'Welcome',
    component: WelcomeComponent,
  },
  {
    path: 'user-info',
    title: 'User Info',
    component: UserInfoPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaticPagesRoutingModule {}

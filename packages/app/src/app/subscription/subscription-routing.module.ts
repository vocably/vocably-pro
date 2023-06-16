import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoSubscribePageComponent } from './pages/auto-subscribe-page/auto-subscribe-page.component';
import { ManagePageComponent } from './pages/manage-page/manage-page.component';
import { SubscribePageComponent } from './pages/subscribe-page/subscribe-page.component';

const routes: Routes = [
  {
    path: '',
    component: SubscribePageComponent,
    title: 'Subscribe',
  },
  {
    path: 'auto',
    title: 'Subscribe',
    component: AutoSubscribePageComponent,
  },
  {
    path: 'manage',
    title: 'Manage Subscription',
    component: ManagePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubscriptionRoutingModule {}

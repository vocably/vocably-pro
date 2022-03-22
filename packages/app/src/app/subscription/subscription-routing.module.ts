import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscribePageComponent } from './pages/subscribe-page/subscribe-page.component';
import { ManagePageComponent } from './pages/manage-page/manage-page.component';

const routes: Routes = [
  {
    path: '',
    component: SubscribePageComponent,
  },
  {
    path: 'manage',
    component: ManagePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubscriptionRoutingModule {}

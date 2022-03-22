import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscribePageComponent } from './pages/subscribe-page/subscribe-page.component';

const routes: Routes = [
  {
    path: '',
    component: SubscribePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubscriptionRoutingModule {}

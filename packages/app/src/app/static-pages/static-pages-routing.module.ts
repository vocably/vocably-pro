import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInfoPageComponent } from './user-info-page/user-info-page.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
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

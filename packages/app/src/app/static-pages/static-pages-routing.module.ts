import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UninstallComponent } from './uninstall/uninstall.component';
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
  {
    path: 'uninstall',
    title: 'Uninstall',
    component: UninstallComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaticPagesRoutingModule {}

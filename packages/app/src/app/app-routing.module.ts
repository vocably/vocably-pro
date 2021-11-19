import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './pages/home-page/home-page.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CognitoAuthGuard } from './auth/cognito-auth.guard';
import { AuthModule } from './auth/auth.module';
import { LoginPageComponent } from './auth/pages/login-page/login-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    canActivate: [CognitoAuthGuard],
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomePageModule, AuthModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}

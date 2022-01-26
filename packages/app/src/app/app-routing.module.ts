import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CognitoAuthGuard } from './auth/cognito-auth.guard';
import { AuthModule } from './auth/auth.module';
import { LoginPageComponent } from './auth/pages/login-page/login-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'deck',
  },
  {
    path: 'deck',
    loadChildren: () =>
      import('./decks/decks.module').then((m) => m.DecksModule),
    canActivate: [CognitoAuthGuard],
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AuthModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}

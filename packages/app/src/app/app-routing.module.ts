import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CognitoAuthGuard } from './auth/cognito-auth.guard';
import { AuthModule } from './auth/auth.module';
import { SignInPageComponent } from './auth/pages/sign-in-page/sign-in-page.component';
import { AutoSignInPageComponent } from './auth/pages/auto-sign-in-page/auto-sign-in-page.component';
import { SignInSuccessPageComponent } from './auth/pages/sign-in-success-page/sign-in-success-page.component';

export const autoSignInPath = 'hands-free';

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
    path: 'sign-in',
    component: SignInPageComponent,
  },
  {
    path: autoSignInPath,
    component: AutoSignInPageComponent,
  },
  {
    path: 'signed-in',
    component: SignInSuccessPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AuthModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
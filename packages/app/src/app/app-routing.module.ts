import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CognitoAuthGuard } from './auth/cognito-auth.guard';
import { AuthModule } from './auth/auth.module';
import { SignInPageComponent } from './auth/pages/sign-in-page/sign-in-page.component';
import { HandsFreePageComponent } from './auth/pages/hands-free-page/hands-free-page.component';
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
    path: 'subscription',
    loadChildren: () =>
      import('./subscription/subscription.module').then(
        (m) => m.SubscriptionModule
      ),
    canActivate: [CognitoAuthGuard],
  },
  {
    path: 'sign-in',
    component: SignInPageComponent,
  },
  {
    path: autoSignInPath,
    component: HandsFreePageComponent,
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

import { Injectable, NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  RouterModule,
  RouterStateSnapshot,
  Routes,
  TitleStrategy,
} from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { CognitoAuthGuard } from './auth/cognito-auth.guard';
import { HandsFreePageComponent } from './auth/pages/hands-free-page/hands-free-page.component';
import { SignInPageComponent } from './auth/pages/sign-in-page/sign-in-page.component';
import { SignInSuccessPageComponent } from './auth/pages/sign-in-success-page/sign-in-success-page.component';
import { SignOutPageComponent } from './auth/pages/sign-out-page/sign-out-page.component';
import { isIosSafari } from './isIosSafari';
import { AndroidPageComponent } from './pages/android-page/android-page.component';
import { IosPageComponent } from './pages/ios-page/ios-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';

export const autoSignInPath = 'hands-free';

@Injectable()
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`Vocably | ${title}`);
    } else {
      this.title.setTitle('Vocably');
    }
  }
}

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
    path: 'page',
    loadChildren: () =>
      import('./static-pages/static-pages.module').then(
        (m) => m.StaticPagesModule
      ),
  },
  {
    path: 'sign-in',
    title: 'Sign In',
    component: SignInPageComponent,
  },
  {
    path: autoSignInPath,
    title: 'Auto Sign In',
    component: HandsFreePageComponent,
  },
  {
    path: 'signed-in',
    component: SignInSuccessPageComponent,
  },
  {
    path: 'sign-out',
    component: SignOutPageComponent,
  },
  {
    path: 'ios',
    title: isIosSafari ? undefined : 'iOS',
    component: IosPageComponent,
  },
  {
    path: 'android',
    title: 'Android',
    component: AndroidPageComponent,
  },
  {
    path: 'settings',
    title: 'Settings',
    component: SettingsPageComponent,
  },
  { path: '**', pathMatch: 'full', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AuthModule],
  exports: [RouterModule],
  providers: [{ provide: TitleStrategy, useClass: TemplatePageTitleStrategy }],
})
export class AppRoutingModule {}

import { Component, OnInit } from '@angular/core';
import { RouterParamsService } from './router-params.service';
import { UpdateService } from './update.service';
import { Platform } from '@ionic/angular';
import { RefreshService } from './refresh.service';
import { firstValueFrom, switchMap, tap } from 'rxjs';
import { PaddleService } from './subscription/paddle.service';
import * as PullToRefresh from 'pulltorefreshjs';
import { filter } from 'rxjs/operators';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  clearScreen = false;
  disabledRefresher = false;

  constructor(
    routerParams: RouterParamsService,
    private updateService: UpdateService,
    private refreshService: RefreshService,
    public platform: Platform,
    private paddleService: PaddleService,
    private authService: AuthService
  ) {
    routerParams.data$.subscribe((data) => {
      this.clearScreen = data['clearScreen'] ?? false;
      this.disabledRefresher = data['disabledRefresher'] ?? false;
    });

    this.updateService.bootstrap();

    refreshService.refresh$
      .pipe(
        tap(() => refreshService.register('update')),
        switchMap(() => this.updateService.checkForUpdate())
      )
      .subscribe(() => refreshService.unregister('update'));

    this.paddleService.bootstrap();

    this.paddleService.event$
      .pipe(
        tap(console.log),
        filter((event) => event.event === 'Checkout.Complete')
      )
      .subscribe(() => {
        setTimeout(() => {
          this.authService.refreshUserData();
        }, 2000);
      });
  }

  ngOnInit() {
    PullToRefresh.init({
      mainElement: 'body',
      onRefresh: () => {
        this.refreshService.refresh$.next(null);
        return firstValueFrom(this.refreshService.isRefreshed$);
      },
      shouldPullToRefresh: () =>
        this.platform.is('pwa') &&
        !this.disabledRefresher &&
        window.scrollY === 0,
    });
  }
}

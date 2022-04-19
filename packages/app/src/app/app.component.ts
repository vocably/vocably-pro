import { Component, HostListener, OnInit } from '@angular/core';
import { RouterParamsService } from './router-params.service';
import { UpdateService } from './update.service';
import { Platform } from '@ionic/angular';
import { RefreshService } from './refresh.service';
import { firstValueFrom, map, switchMap, tap, distinct } from 'rxjs';
import { PaddleService } from './subscription/paddle.service';
import * as PullToRefresh from 'pulltorefreshjs';
import { AuthService } from './auth/auth.service';
import { setUp, setUserId } from '../piwik';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  cleanScreen = false;
  disabledRefresher = false;
  isOffline = !window.navigator.onLine;

  constructor(
    routerParams: RouterParamsService,
    private updateService: UpdateService,
    private refreshService: RefreshService,
    public platform: Platform,
    private paddleService: PaddleService,
    private auth: AuthService
  ) {
    routerParams.data$.subscribe((data) => {
      this.cleanScreen = data['cleanScreen'] ?? false;
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

    let isPiwikSet = false;
    this.auth.userData$
      .pipe(
        map((data) => data.email),
        distinct()
      )
      .subscribe((email) => {
        if (!isPiwikSet) {
          setUp(environment.piwikId);
          isPiwikSet = true;
        }

        setTimeout(() => {
          setUserId(email);
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

  @HostListener('window:online')
  onOnline() {
    this.isOffline = false;
  }

  @HostListener('window:offline')
  onOffline() {
    this.isOffline = true;
  }
}

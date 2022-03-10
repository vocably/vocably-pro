import { Component } from '@angular/core';
import { RouterParamsService } from './router-params.service';
import { UpdateService } from './update.service';
import { Platform } from '@ionic/angular';
import { RefreshService } from './refresh.service';
import { switchMap, take, tap } from 'rxjs';
import { PaddleService } from './subscription/paddle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  clearScreen = false;
  disabledRefresher = false;

  constructor(
    routerParams: RouterParamsService,
    private updateService: UpdateService,
    private refreshService: RefreshService,
    public platform: Platform,
    private paddleService: PaddleService
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
  }

  doRefresh(event: any) {
    this.refreshService.refresh$.next(null);
    this.refreshService.isRefreshed$.pipe(take(1)).subscribe(() => {
      event.detail.complete();
    });
  }
}

import { Component } from '@angular/core';
import { RouterParamsService } from './router-params.service';
import { UpdateService } from './update.service';
import { Platform, RefresherEventDetail } from '@ionic/angular';
import { RefreshService } from './refresh.service';
import { switchMap, take, tap } from 'rxjs';

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
    public platform: Platform
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
  }

  doRefresh(event: any) {
    this.refreshService.refresh$.next(null);
    this.refreshService.isRefreshed$.pipe(take(1)).subscribe(() => {
      event.detail.complete();
    });
  }
}

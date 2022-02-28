import { ApplicationRef, Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { ToastController } from '@ionic/angular';
import { concat, first, interval } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UpdateService {
  constructor(
    private appRef: ApplicationRef,
    private swUpdate: SwUpdate,
    private toastController: ToastController
  ) {}

  async bootstrap() {
    if (!this.swUpdate.isEnabled) {
      console.info('Service worker is not enabled.');
      return;
    }

    this.swUpdate.versionUpdates
      .pipe(first((event) => event.type === 'VERSION_READY'))
      .subscribe(async () => {
        const toast = await this.toastController.create({
          message: 'Update is available. Would you like to reload the app?',
          position: 'bottom',
          buttons: [
            {
              text: 'Reload',
              handler: () => {
                this.swUpdate.activateUpdate().then(() => {
                  window.location.reload();
                });
              },
            },
          ],
        });
        await toast.present();
      });

    this.swUpdate.unrecoverable.subscribe(() => {
      alert(
        'An unrecoverable error has occurred. The application will be reloaded.'
      );
      window.location.reload();
    });

    const appIsStable$ = this.appRef.isStable.pipe(
      first((isStable) => isStable === true)
    );
    const everyOnceInAwhile$ = interval(30 * 60 * 1000); // Half an hour
    const everyOnceInAwhileWhenAppIsStable$ = concat(
      appIsStable$,
      everyOnceInAwhile$
    );
    everyOnceInAwhileWhenAppIsStable$.subscribe(() =>
      this.swUpdate.checkForUpdate()
    );
  }
}

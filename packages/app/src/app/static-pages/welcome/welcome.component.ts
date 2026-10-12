import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslocoPipe } from '@jsverse/transloco';
import { Subject, take, takeUntil } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { HeaderComponent } from '../../header/header.component';
import { setStats } from '../../stats';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  imports: [HeaderComponent, IonicModule, TranslocoPipe],
})
export class WelcomeComponent implements OnDestroy {
  private destroy$ = new Subject();

  constructor(auth: AuthService, router: Router) {
    setStats({ installedDateIso: new Date().toISOString() });

    auth.isLoggedIn$
      .pipe(take(1), takeUntil(this.destroy$))
      .subscribe(async (isLoggedIn) => {
        setStats({ isLoggedIn });

        if (isLoggedIn) {
          await auth.refreshToken();
          router.navigate(['/'], { replaceUrl: true }).then();
          return;
        }

        router.navigate(['/welcome'], { replaceUrl: true }).then();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}

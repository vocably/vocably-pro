import { Component, OnInit } from '@angular/core';
import { from, take } from 'rxjs';
import { AuthService, UserData } from 'src/app/auth/auth.service';
import { update } from '../../paddle';
import { ActivatedRoute, Router } from '@angular/router';
import { canUpdateSubscription } from '../../canUpdateSubscription';

@Component({
  selector: 'app-manage-page',
  templateUrl: './manage-page.component.html',
  styleUrls: ['./manage-page.component.scss'],
})
export class ManagePageComponent implements OnInit {
  public isLoading = true;

  public userData: UserData | false = false;

  constructor(
    private authService: AuthService,
    router: Router,
    route: ActivatedRoute
  ) {
    this.authService.userData$.pipe(take(1)).subscribe((userData) => {
      if (!canUpdateSubscription(userData)) {
        router.navigate(['../'], { relativeTo: route });
      }
    });
  }

  ngOnInit(): void {
    from(this.authService.userData$)
      .pipe(take(1))
      .subscribe((userData) => {
        this.userData = userData;
      });
  }

  async updatePaymentMethod(userData: UserData) {
    if (!userData.updateUrl) {
      return;
    }

    await update({
      email: userData.email,
      passthrough: {
        username: userData.username,
      },
      override: userData.updateUrl,
    });
  }

  async cancelSubscription(userData: UserData) {
    if (!userData.cancelUrl) {
      return;
    }

    await update({
      email: userData.email,
      passthrough: {
        username: userData.username,
      },
      override: userData.cancelUrl,
    });
  }
}

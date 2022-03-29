import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-hands-free-page',
  templateUrl: './hands-free-page.component.html',
  styleUrls: ['./hands-free-page.component.scss'],
})
export class HandsFreePageComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.auth.isLoggedIn$
      .pipe(takeUntil(this.destroy$))
      .subscribe(async (isLoggedIn) => {
        if (isLoggedIn) {
          await this.auth.refreshToken();
          this.router.navigate(['/signed-in']);
        } else {
          this.auth.signIn();
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import {
  canExtensionBeInstalled,
  extensionInstallationUrl,
} from '../../extension';
import { isExtensionInstalled } from '../isExtensionInstalled';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();

  public extensionCanBeInstalled = canExtensionBeInstalled;
  public extensionIsInstalled: boolean | undefined = undefined;
  public extensionInstallUrl = extensionInstallationUrl;

  constructor() {}

  ngOnInit(): void {
    isExtensionInstalled
      .pipe(takeUntil(this.destroy$))
      .subscribe((isInstalled) => {
        this.extensionIsInstalled = isInstalled;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}

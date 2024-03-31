import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { setSourceLanguage } from '@vocably/extension-messages';
import { isGoogleLanguage } from '@vocably/model';
import { filter, map, Subject, switchMap, takeUntil, tap } from 'rxjs';
import { extensionId } from '../../../../extension';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss'],
})
export class SecondPageComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();

  public isLoading = true;
  public exampleHtml = ``;

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        takeUntil(this.destroy$),
        filter((params: any) => !!params['language']),
        map((params) => params['language']),
        filter(isGoogleLanguage),
        tap(() => (this.isLoading = true)),
        tap((language) => setSourceLanguage(extensionId, language)),
        switchMap((language) =>
          this.httpClient.get(
            `/assets/language-text-examples/${language}.html`,
            {
              responseType: 'text',
            }
          )
        ),
        takeUntil(this.destroy$)
      )
      .subscribe((response) => {
        this.isLoading = false;
        this.exampleHtml = response;
      });
  }

  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}

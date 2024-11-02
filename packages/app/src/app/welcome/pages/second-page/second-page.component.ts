import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  setProxyLanguage,
  setSourceLanguage,
} from '@vocably/extension-messages';
import { GoogleLanguage, isGoogleLanguage } from '@vocably/model';
import posthog from 'posthog-js';
import {
  catchError,
  filter,
  Observable,
  of,
  Subject,
  switchMap,
  takeUntil,
  tap,
  throwError,
} from 'rxjs';
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
  public hasNoExample = false;

  public sourceLanguage: GoogleLanguage | undefined = undefined;
  public targetLanguage: GoogleLanguage | undefined = undefined;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        takeUntil(this.destroy$),
        filter(
          (params: any) => params['sourceLanguage'] && params['targetLanguage']
        ),
        filter((params) => {
          return (
            isGoogleLanguage(params['sourceLanguage']) &&
            isGoogleLanguage(params['targetLanguage'])
          );
        }),
        tap(() => (this.isLoading = true)),
        tap(async (params) => {
          await setSourceLanguage(extensionId, params['sourceLanguage']);
          await setProxyLanguage(extensionId, params['targetLanguage']);
          this.sourceLanguage = params['sourceLanguage'];
          this.targetLanguage = params['targetLanguage'];

          posthog.capture('$set', {
            $set: {
              studyLanguage: this.sourceLanguage,
              nativeLanguage: this.targetLanguage,
            },
          });
        }),
        switchMap((params): Observable<string> => {
          const exampleExists = [
            'de',
            'en',
            'es',
            'fr',
            'it',
            'ja',
            'nl',
            'pt',
          ].includes(params['sourceLanguage']);

          if (!exampleExists) {
            return throwError(() => new Error('No example available'));
          }

          return this.httpClient.get(
            `/assets/language-text-examples/${params['sourceLanguage']}.html`,
            {
              responseType: 'text',
            }
          );
        }),
        takeUntil(this.destroy$),
        catchError(() => {
          this.hasNoExample = true;
          return of('');
        })
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

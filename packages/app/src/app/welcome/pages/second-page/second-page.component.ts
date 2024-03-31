import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, Subject, switchMap, takeUntil } from 'rxjs';

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
        switchMap((params) => {
          this.isLoading = true;
          return this.httpClient.get(
            `/assets/language-text-examples/${params['language']}.html`,
            {
              responseType: 'text',
            }
          );
        }),
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

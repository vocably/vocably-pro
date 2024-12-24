import { Component, OnDestroy, OnInit } from '@angular/core';
import { languageList } from '@vocably/model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit, OnDestroy {
  destroy$ = new Subject<void>();

  sourceLanguages: string[] = Object.keys(languageList);
  targetLanguages: string[] = Object.keys(languageList);

  isReversed: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  submit() {}

  languageName(lng: string): string {
    // @ts-ignore
    return languageList[lng] ?? '';
  }
}

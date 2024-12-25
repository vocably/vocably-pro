import { Component, OnInit } from '@angular/core';
import { Result, TranslationCards } from '@vocably/model';
import { environment } from '../../../environments/environment';
import { needsOnboarding$ } from '../../../needsOnboarding';
import { SearchValues } from '../../search-form/search-form.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  needsOnboarding$ = needsOnboarding$;
  welcomeUrl = `${environment.appBaseUrl}/welcome`;
  showQRCode = false;
  isSearching: boolean = false;
  searchResult: Result<TranslationCards> | null = null;

  constructor() {}

  ngOnInit(): void {}

  async onSearchFormSubmit(values: SearchValues) {
    this.isSearching = true;
    console.log(values);

    const result = await environment.analyze(
      values.isReversed
        ? {
            target: values.text,
            sourceLanguage: values.sourceLanguage,
            targetLanguage: values.targetLanguage,
          }
        : {
            source: values.text,
            sourceLanguage: values.sourceLanguage,
            targetLanguage: values.targetLanguage,
          }
    );

    this.searchResult = result;

    this.isSearching = false;
  }
}

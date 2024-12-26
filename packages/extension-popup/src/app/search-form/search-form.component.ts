import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { GoogleLanguage, isGoogleLanguage, languageList } from '@vocably/model';
import { Subject } from 'rxjs';

export type SearchValues = {
  text: string;
  sourceLanguage: GoogleLanguage;
  targetLanguage: GoogleLanguage;
  isReversed: boolean;
};

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit, OnDestroy {
  @Input() isSearching = false;
  @Output() onSubmit = new EventEmitter<SearchValues>();

  destroy$ = new Subject<void>();

  sourceLanguage = 'nl';
  targetLanguage = 'en';
  isReversed: boolean = false;
  searchText: string = '';

  sourceLanguages: string[] = Object.keys(languageList);
  targetLanguages: string[] = Object.keys(languageList);

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  submit() {
    if (this.isSearching) {
      return;
    }

    if (!isGoogleLanguage(this.sourceLanguage)) {
      return;
    }

    if (!isGoogleLanguage(this.targetLanguage)) {
      return;
    }

    this.onSubmit.emit({
      isReversed: this.isReversed,
      text: this.searchText,
      sourceLanguage: this.sourceLanguage,
      targetLanguage: this.targetLanguage,
    });
  }

  languageName(lng: string): string {
    // @ts-ignore
    return languageList[lng] ?? '';
  }

  getPlaceholderText(): string {
    if (!this.sourceLanguage || !this.targetLanguage) {
      return '';
    }

    if (this.isReversed) {
      return `Search in ${this.languageName(this.targetLanguage)}...`;
    }

    return `Search in ${this.languageName(this.sourceLanguage)}...`;
  }
}

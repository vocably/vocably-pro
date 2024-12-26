import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {
  GoogleLanguage,
  isGoogleLanguage,
  languageList,
  LanguagePairs,
} from '@vocably/model';
import { Subject } from 'rxjs';
import { detectTargetLanguage } from '../../detectTargetLanguage';

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
  @Input() value: SearchValues | null = null;
  @Input() languagePairs: LanguagePairs = {};
  @Output() onSubmit = new EventEmitter<SearchValues>();
  @Output() onChange = new EventEmitter<SearchValues>();

  destroy$ = new Subject<void>();

  sourceLanguage = 'en';
  targetLanguage = detectTargetLanguage();
  isReversed: boolean = false;
  searchText: string = '';

  preferredSourceLanguages: string[] = [];
  preferredTargetLanguages: string[] = [];

  availableSourceLanguages: string[] = [];
  availableTargetLanguages: string[] = [];

  textInputFocused = false;

  constructor() {}

  ngOnInit(): void {
    if (this.value) {
      this.sourceLanguage = this.value.sourceLanguage;
      this.targetLanguage = this.value.targetLanguage;
      this.isReversed = this.value.isReversed;
    }

    const allLanguages = Object.keys(languageList);

    this.preferredSourceLanguages = Object.keys(this.languagePairs);
    this.preferredTargetLanguages = Object.values(this.languagePairs).reduce(
      (acc, pair) => {
        return [
          ...acc,
          ...pair.possibleTargetLanguages.filter(
            (possibleLanguage) => !acc.includes(possibleLanguage)
          ),
        ];
      },
      [] as string[]
    );

    this.availableSourceLanguages = allLanguages.filter(
      (l) => !this.preferredSourceLanguages.includes(l)
    );
    this.availableTargetLanguages = allLanguages.filter(
      (l) => !this.preferredTargetLanguages.includes(l)
    );
  }

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
      return `${
        this.textInputFocused ? 'Enter any' : 'Click here to search'
      } text in ${this.languageName(
        this.targetLanguage
      )} and create cards for ${this.languageName(this.sourceLanguage)}`;
    }

    return `${
      this.textInputFocused ? 'Enter any' : 'Click here to search'
    } text in ${this.languageName(this.sourceLanguage)}`;
  }

  sourceLanguageChange() {
    // @ts-ignore
    if (this.languagePairs[this.sourceLanguage]) {
      this.targetLanguage =
        // @ts-ignore
        this.languagePairs[this.sourceLanguage].currentTargetLanguage;
    }

    this.change();
  }

  targetLanguageChange() {
    this.change();
  }

  change() {
    if (this.isSearching) {
      return;
    }

    if (!isGoogleLanguage(this.sourceLanguage)) {
      return;
    }

    if (!isGoogleLanguage(this.targetLanguage)) {
      return;
    }

    this.onChange.emit({
      isReversed: this.isReversed,
      text: this.searchText,
      sourceLanguage: this.sourceLanguage,
      targetLanguage: this.targetLanguage,
    });
  }
}

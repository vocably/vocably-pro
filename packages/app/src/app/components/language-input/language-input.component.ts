import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Language, languageList } from '@vocably/model';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith, Subject, takeUntil } from 'rxjs';
import { isExtensionInstalled } from '../../isExtensionInstalled';
import {
  getProxyLanguage,
  setProxyLanguage,
} from '@vocably/extension-messages';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-language-input',
  templateUrl: './language-input.component.html',
  styleUrls: ['./language-input.component.scss'],
})
export class LanguageInputComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();

  @Output() onSave = new EventEmitter<Language>();

  languageInput = new FormControl<Language>({
    value: 'en',
    disabled: true,
  });

  isInstalled = false;

  public languages$: Observable<Language[]> =
    this.languageInput.valueChanges.pipe(
      startWith(''),
      map((value) =>
        this._filterLanguages(this.languageInput.pristine ? '' : value ?? '')
      )
    );

  constructor() {
    isExtensionInstalled.pipe(takeUntil(this.destroy$)).subscribe(async () => {
      this.isInstalled = true;
      this.languageInput.setValue(
        await getProxyLanguage(environment.chromeExtensionId)
      );
      this.languageInput.enable();
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  private _filterLanguages(value: string): Language[] {
    const loweredValue = value.toLowerCase();
    return Object.entries(languageList)
      .filter(
        ([languageCode, languageName]) =>
          languageCode.toLowerCase().includes(loweredValue) ||
          languageName.toLowerCase().includes(loweredValue)
      )
      .map(([code]) => code as Language);
  }

  displayLanguage(languageCode: Language): string {
    return languageCode ? languageList[languageCode] : '';
  }

  onLanguageInputFocus(event: any) {
    if (this.languageInput.pristine) {
      event.target.select();
    }
  }

  async saveLanguage(language: Language) {
    await setProxyLanguage(environment.chromeExtensionId, language);
    this.onSave.emit(language);
  }
}

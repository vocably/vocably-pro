import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  getProxyLanguage,
  setProxyLanguage,
} from '@vocably/extension-messages';
import { GoogleLanguage, languageList } from '@vocably/model';
import { map, Observable, startWith, Subject, takeUntil } from 'rxjs';
import { extensionId } from '../../../extension';
import { isExtensionInstalled } from '../../isExtensionInstalled';

@Component({
  selector: 'app-language-input',
  templateUrl: './language-input.component.html',
  styleUrls: ['./language-input.component.scss'],
})
export class LanguageInputComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();

  @Output() onSave = new EventEmitter<GoogleLanguage>();

  languageInput = new FormControl<GoogleLanguage>({
    value: 'en',
    disabled: true,
  });

  isInstalled: boolean | undefined = undefined;

  public languages$: Observable<GoogleLanguage[]> =
    this.languageInput.valueChanges.pipe(
      startWith(''),
      map((value) =>
        this._filterLanguages(this.languageInput.pristine ? '' : value ?? '')
      )
    );

  constructor() {
    isExtensionInstalled
      .pipe(takeUntil(this.destroy$))
      .subscribe(async (isInstalled) => {
        this.isInstalled = isInstalled;

        if (isInstalled) {
          this.languageInput.setValue(await getProxyLanguage(extensionId));
          this.languageInput.enable();
        } else {
          this.languageInput.disable();
        }
      });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  private _filterLanguages(value: string): GoogleLanguage[] {
    const loweredValue = value.toLowerCase();
    return Object.entries(languageList)
      .filter(
        ([languageCode, languageName]) =>
          languageCode.toLowerCase().includes(loweredValue) ||
          languageName.toLowerCase().includes(loweredValue)
      )
      .map(([code]) => code as GoogleLanguage);
  }

  displayLanguage(languageCode: GoogleLanguage): string {
    return languageCode ? languageList[languageCode] : '';
  }

  onLanguageInputFocus(event: any) {
    if (this.languageInput.pristine) {
      event.target.select();
    }
  }

  async saveLanguage(language: GoogleLanguage) {
    await setProxyLanguage(extensionId, language);
    this.onSave.emit(language);
  }
}

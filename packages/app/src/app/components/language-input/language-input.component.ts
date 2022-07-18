import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Language, languageList } from '@vocably/model';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-language-input',
  templateUrl: './language-input.component.html',
  styleUrls: ['./language-input.component.scss'],
})
export class LanguageInputComponent implements OnInit {
  @Input() value: Language = 'en';
  @Output() onSelect = new EventEmitter<Language>();

  languageInput = new FormControl<Language>(this.value);

  public languages$: Observable<Language[]> =
    this.languageInput.valueChanges.pipe(
      startWith(''),
      map((value) => this._filterLanguages(value || ''))
    );

  constructor() {}

  ngOnInit(): void {
    this.languageInput.setValue(this.value);
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
}

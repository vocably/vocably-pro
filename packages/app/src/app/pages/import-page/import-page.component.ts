import { Component, OnDestroy, OnInit } from '@angular/core';
import { listLanguages } from '@vocably/api';
import { getSourceLanguage } from '@vocably/extension-messages';
import { GoogleLanguage, languageList } from '@vocably/model';
import { firstValueFrom, Subject } from 'rxjs';
import { extensionId } from '../../../extension';
import { isExtensionInstalled$ } from '../../isExtensionInstalled';

const detectImportDeck = async (): Promise<GoogleLanguage | ''> => {
  const isExtensionInstalled = await firstValueFrom(
    isExtensionInstalled$.pipe()
  );

  if (isExtensionInstalled) {
    const extensionSourceLanguage = await getSourceLanguage(extensionId);
    if (extensionSourceLanguage) {
      return extensionSourceLanguage;
    }
  }

  const result = await listLanguages();

  if (result.success === false) {
    return '';
  }

  if (result.value.length === 1) {
    return result.value[0] as GoogleLanguage;
  }

  return '';
};

@Component({
  selector: 'app-import-page',
  templateUrl: './import-page.component.html',
  styleUrls: ['./import-page.component.scss'],
})
export class ImportPageComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();

  public loadingDecks = true;
  public selectedDeck: GoogleLanguage | '' = '';

  public languages = Object.keys(languageList);

  constructor() {}

  async ngOnInit() {
    this.loadingDecks = true;
    this.selectedDeck = await detectImportDeck();
    this.loadingDecks = false;
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}

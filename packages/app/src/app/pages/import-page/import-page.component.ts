import { Component, OnDestroy, OnInit } from '@angular/core';

import {
  deleteTag,
  listLanguages,
  loadLanguageDeck,
  updateTag,
} from '@vocably/api';
import { getSourceLanguage } from '@vocably/extension-messages';
import {
  Card,
  GoogleLanguage,
  isTagItem,
  languageList,
  NewTag,
  TagItem,
} from '@vocably/model';
import {
  firstValueFrom,
  ReplaySubject,
  Subject,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs';
import { extensionId } from '../../../extension';
import { isExtensionInstalled$ } from '../../isExtensionInstalled';
import { csvToArray } from './csvToArray';

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
  public selectedDeck$ = new ReplaySubject<GoogleLanguage | 'none'>();
  public loadingSelectedDeck = false;
  public deck$ = this.selectedDeck$.pipe(
    tap(() => (this.loadingSelectedDeck = true)),
    switchMap(async (selectedDeck) => {
      if (!selectedDeck) {
        return null;
      }

      const deckResult = await loadLanguageDeck(selectedDeck);

      if (deckResult.success === false) {
        return null;
      }

      return deckResult.value;
    }),
    tap(() => (this.loadingSelectedDeck = false)),
    takeUntil(this.destroy$)
  );

  public selectedTags: Array<NewTag | TagItem> = [];
  public newTags: NewTag[] = [];
  public deckTags: TagItem[] = [];

  get allTags(): Array<TagItem | NewTag> {
    return [...this.newTags, ...this.deckTags];
  }

  public csv: string = '';
  public csvData$ = new ReplaySubject<
    Array<Pick<Card, 'source' | 'translation'>>
  >();

  public languages = Object.keys(languageList) as GoogleLanguage[];

  constructor() {}

  async ngOnInit() {
    this.loadingDecks = true;
    this.selectedDeck$.next((await detectImportDeck()) || 'none');
    this.loadingDecks = false;

    this.deck$.pipe(takeUntil(this.destroy$)).subscribe((deck) => {
      this.selectedTags = this.selectedTags.filter((t) => !isTagItem(t));
      this.deckTags = deck ? deck.tags : [];
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  onFileChange(filesInput: EventTarget | null) {
    if (!filesInput || !(filesInput instanceof HTMLInputElement)) {
      return;
    }

    if (!filesInput.files || filesInput.files.length === 0) {
      return;
    }

    const file = filesInput.files.item(0);
    if (file === null) {
      return;
    }

    let reader: FileReader = new FileReader();
    reader.readAsText(file);
    reader.onload = (e) => {
      this.csv = reader.result as string;
      this.onCsvChange();
    };
  }

  onCsvChange() {
    if (this.csv.trim() === '') {
      this.csvData$.next([]);
      return;
    }

    this.csvData$.next(
      csvToArray(this.csv, '\t')
        .map(([source, translation]) => ({
          source,
          translation,
        }))
        .filter((item) => item.source && item.translation)
    );
  }

  selectTag(tag: TagItem | NewTag) {
    if (this.selectedTags.includes(tag)) {
      this.selectedTags = this.selectedTags.filter((t) => t !== tag);
      return;
    }

    this.selectedTags = [...this.selectedTags, tag];
  }

  async addNewTag(tag: NewTag) {
    this.newTags.unshift(tag);
    this.selectedTags.push(tag);
  }

  async saveTag(language: string, tag: TagItem | NewTag) {
    if (!isTagItem(tag)) {
      return;
    }

    const updateResult = await updateTag(language, tag);

    if (!updateResult.success) {
      return;
    }

    this.deckTags = updateResult.value.tags;
  }

  async deleteTag(language: string, tag: TagItem | NewTag) {
    if (isTagItem(tag)) {
      const deleteResult = await deleteTag(language, tag.id);
      if (deleteResult.success) {
        this.deckTags = deleteResult.value.tags;
        this.selectedTags = this.selectedTags.filter(
          (t) => !isTagItem(t) || t.id !== tag.id
        );
      }
      return;
    }

    this.selectedTags = this.selectedTags.filter((t) => t !== tag);
    this.newTags = this.newTags.filter((t) => t !== tag);
  }
}

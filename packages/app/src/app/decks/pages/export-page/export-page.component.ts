import { Component, OnDestroy, OnInit } from '@angular/core';
import { byDate, CardItem } from '@vocably/model';
import { Subject, takeUntil } from 'rxjs';
import { LoaderService } from '../../../components/loader.service';
import { DeckStoreService } from '../../deck-store.service';
import { prepareColumn } from './prepareColumn';

@Component({
  selector: 'app-export-page',
  templateUrl: './export-page.component.html',
  styleUrls: ['./export-page.component.scss'],
})
export class ExportPageComponent implements OnInit, OnDestroy {
  public cards: CardItem[] = [];

  public colDelimiter = 'tab';
  public customColDelimiter = '-';
  public rowDelimiter = 'new_line';
  public customRowDelimiter = '\\n\\n';

  private destroy$ = new Subject();

  constructor(
    public deckStore: DeckStoreService,
    public loader: LoaderService
  ) {
    this.deckStore.deck$.pipe(takeUntil(this.destroy$)).subscribe((deck) => {
      this.cards = deck.cards.sort(byDate);
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  copyToClipboard(textArea: HTMLTextAreaElement): void {
    textArea.select();
    navigator.clipboard.writeText(textArea.value).then();
  }

  getContents(): string {
    const colDelimiter =
      this.colDelimiter === 'tab'
        ? `\t`
        : this.colDelimiter === 'comma'
        ? ','
        : this.customColDelimiter;

    const rowDelimiter =
      this.rowDelimiter === 'new_line'
        ? `\n`
        : this.rowDelimiter === 'semicolon'
        ? ';'
        : this.customRowDelimiter.replace(/\\n/g, `\n`);

    return this.cards
      .map((card) => {
        return [
          prepareColumn(card.data.source, colDelimiter, rowDelimiter),
          prepareColumn(card.data.translation, colDelimiter, rowDelimiter),
          prepareColumn(card.data.ipa ?? '', colDelimiter, rowDelimiter),
          prepareColumn(card.data.definition, colDelimiter, rowDelimiter),
          prepareColumn(card.data.example ?? '', colDelimiter, rowDelimiter),
          prepareColumn(
            card.data.tags.map((t) => t.data.title).join(', '),
            colDelimiter,
            rowDelimiter
          ),
        ].join(colDelimiter);
      })
      .join(rowDelimiter);
  }
}

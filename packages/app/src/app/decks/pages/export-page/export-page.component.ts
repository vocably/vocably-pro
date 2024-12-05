import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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

  public fileName = '';

  private destroy$ = new Subject();

  constructor(
    public deckStore: DeckStoreService,
    public loader: LoaderService,
    protected sanitizer: DomSanitizer
  ) {
    this.deckStore.deck$.pipe(takeUntil(this.destroy$)).subscribe((deck) => {
      this.cards = deck.cards.sort(byDate);

      this.fileName = `${deck.language}`;
      if (this.cards.length > 0) {
        const lastCreateDate = new Date(this.cards[0].created);
        this.fileName += `-${lastCreateDate.getFullYear()}-${(
          lastCreateDate.getMonth() + 1
        )
          .toString()
          .padStart(2, '0')}-${lastCreateDate
          .getDate()
          .toString()
          .padStart(2, '0')}`;
      }
      this.fileName += '.csv';
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
          prepareColumn(card.data.partOfSpeech, colDelimiter, rowDelimiter),
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

  getContentsLink = (textContents: string): any => {
    const blob = new Blob([textContents], { type: 'text/csv' });
    return this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(blob));
  };
}

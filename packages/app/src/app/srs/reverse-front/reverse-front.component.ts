import { Component, Input } from '@angular/core';
import { CardItem } from '@vocably/model';
import { explode } from '@vocably/sulna';
import { TranslocoModule } from '@jsverse/transloco';
import { maskTheWord } from '../maskTheWord';

@Component({
  selector: 'app-srs-reverse-front',
  imports: [TranslocoModule],
  templateUrl: './reverse-front.component.html',
  styleUrl: './reverse-front.component.scss',
})
export class ReverseFrontComponent {
  public card!: CardItem;
  public definitions: string[] = [];
  public examples: string[] = [];

  @Input('card') set setCard(card: CardItem) {
    this.card = card;

    const mask = maskTheWord(card.data.source, card.data.language);

    // The source is the answer, so it must not leak through
    // the definitions or the examples
    this.definitions = explode(card.data.definition)
      .filter((text) => !(text.includes('[') && text.includes(']')))
      .map((text) => mask(text).value);

    this.examples = explode(card.data.example ?? '')
      .map(mask)
      .filter(({ masked }) => masked)
      .map(({ value }) => value);
  }
}

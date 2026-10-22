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
  public isChecked = false;
  public definitions: string[] = [];
  public examples: string[] = [];

  @Input('card') set setCard(card: CardItem) {
    this.card = card;
    this.update();
  }

  @Input('isChecked') set setIsChecked(isChecked: boolean) {
    this.isChecked = isChecked;
    this.update();
  }

  private update() {
    if (!this.card) {
      return;
    }

    const definitions = explode(this.card.data.definition);
    const examples = explode(this.card.data.example ?? '');

    if (this.isChecked) {
      this.definitions = definitions;
      this.examples = examples;
      return;
    }

    const mask = maskTheWord(this.card.data.source, this.card.data.language);

    // The source is the answer, so it must not leak through
    // the definitions or the examples
    this.definitions = definitions
      .filter((text) => !(text.includes('[') && text.includes(']')))
      .map((text) => mask(text).value);

    this.examples = examples
      .map(mask)
      .filter(({ masked }) => masked)
      .map(({ value }) => value);
  }
}

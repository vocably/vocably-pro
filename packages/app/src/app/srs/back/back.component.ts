import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { TranslocoModule } from '@jsverse/transloco';
import { CardItem } from '@vocably/model';
import { explode, isGoodPlural } from '@vocably/sulna';

// Wraps text in a Unicode "first strong isolate" so RTL content (e.g. Arabic)
// keeps its own direction without reordering the surrounding content.
const isolate = (text: string = '') => `⁨${text}⁩`;

type Inflection = {
  label: string;
  value: string;
};

@Component({
  selector: 'app-srs-back',
  imports: [MatIcon, TranslocoModule],
  templateUrl: './back.component.html',
  styleUrl: './back.component.scss',
})
export class BackComponent {
  @Input({ required: true }) card!: CardItem;
  @Input() showInflections = true;

  get isEmpty(): boolean {
    return !this.card.data.translation && !this.card.data.definition;
  }

  get definitions(): string[] {
    return explode(this.card.data.definition ?? '');
  }

  get inflections(): Inflection[] {
    if (!this.showInflections) {
      return [];
    }

    const { presentTenses, pastTenses, tense, number, pluralForm } =
      this.card.data;

    return [
      presentTenses && {
        label: 'srs.back.present',
        value: isolate(presentTenses),
      },
      tense === 'present' &&
        pastTenses && {
          label: 'srs.back.past',
          value: isolate(pastTenses),
        },
      number === 'singular' &&
        isGoodPlural(pluralForm) && {
          label: 'srs.back.plural',
          value: isolate(pluralForm),
        },
    ].filter(Boolean) as Inflection[];
  }
}

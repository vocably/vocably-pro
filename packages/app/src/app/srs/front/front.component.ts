import { Component, inject, Input } from '@angular/core';
import { CardItem, isGoogleTTSLanguage } from '@vocably/model';
import { explode, isGoodPlural, sanitizeTranscript } from '@vocably/sulna';
import { PlaySoundComponent } from '../../components/play-sound/play-sound.component';
import { TranslocoService } from '@jsverse/transloco';

// Wraps text in a Unicode "first strong isolate" so RTL content (e.g. Arabic)
// keeps its own direction without reordering the surrounding content.
const isolate = (text: string = '') => `⁨${text}⁩`;

@Component({
  selector: 'app-srs-front',
  imports: [PlaySoundComponent],
  templateUrl: './front.component.html',
  styleUrl: './front.component.scss',
})
export class FrontComponent {
  private transloco = inject(TranslocoService);

  @Input({ required: true }) card!: CardItem;
  @Input() showInflections = false;

  protected readonly sanitizeTranscript = sanitizeTranscript;

  get canPlaySound(): boolean {
    return isGoogleTTSLanguage(this.card.data.language);
  }

  get tags(): string[] {
    return [
      this.card.data.partOfSpeech &&
        this.transloco.translate(this.card.data.partOfSpeech),
      this.card.data.g,
    ].filter(Boolean) as string[];
  }

  get inflections(): string[] {
    if (!this.showInflections) {
      return [];
    }

    const { presentTenses, pastTenses, tense, number, pluralForm } =
      this.card.data;

    return [
      presentTenses &&
        this.transloco.translate('srs.front.present_tenses', {
          value: isolate(presentTenses),
        }),
      tense === 'present' &&
        pastTenses &&
        this.transloco.translate('srs.front.past_tenses', {
          value: isolate(pastTenses),
        }),
      number === 'singular' &&
        isGoodPlural(pluralForm) &&
        this.transloco.translate('srs.front.plural', {
          value: isolate(pluralForm),
        }),
    ].filter(Boolean) as string[];
  }

  get examples(): string[] {
    return explode(this.card.data.example ?? '');
  }
}

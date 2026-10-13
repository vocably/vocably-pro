import {
  Component,
  Element,
  forceUpdate,
  Fragment,
  h,
  Host,
  Prop,
} from '@stencil/core';
import {
  AudioPronunciationPayload,
  isGoogleTTSLanguage,
  Result,
  TranslationCard,
} from '@vocably/model';
import { isGoodPlural, sanitizeTranscript } from '@vocably/sulna';
import { subscribeToLocale, t } from '../../i18n';

const FREQUENCY_DOTS = 3;

// Frequency comes as 1 (rare) to 10 (most common).
const frequencyToLevel = (frequency: number): 1 | 2 | 3 => {
  if (frequency >= 8) {
    return 3;
  }

  if (frequency >= 4) {
    return 2;
  }

  return 1;
};

@Component({
  tag: 'vocably-card-source',
  styleUrl: 'card-source.scss',
  shadow: false,
})
export class VocablyCardSource {
  @Element() el: HTMLElement;
  @Prop() card: TranslationCard;
  @Prop() playAudioPronunciation: (
    payload: AudioPronunciationPayload
  ) => Promise<Result<true>>;

  private unsubLocale: (() => void) | undefined;

  connectedCallback() {
    this.unsubLocale = subscribeToLocale(this.el, () => forceUpdate(this.el));
  }

  disconnectedCallback() {
    this.unsubLocale?.();
  }

  private renderFrequency(frequency: number) {
    const level = frequencyToLevel(frequency);
    const label = t(`card_source.frequency_${level}`);

    return (
      <Fragment>
        <span class="vocably-invisible-space">&nbsp;</span>
        <span
          class="vocably-frequency vocably-translation-margin-left"
          title={label}
          aria-label={label}
          role="img"
        >
          {Array.from({ length: FREQUENCY_DOTS }, (_, index) => (
            <span
              class={{
                'vocably-frequency-dot': true,
                'vocably-frequency-dot-filled': index < level,
              }}
            />
          ))}
        </span>
      </Fragment>
    );
  }

  render() {
    if (this.card === undefined) {
      return <div>Card is undefined</div>;
    }

    const past = this.card.data.tense !== 'past' && this.card.data.pastTenses;
    return (
      <Host>
        {isGoogleTTSLanguage(this.card.data.language) && (
          <vocably-play-sound
            text={this.card.data.source}
            language={this.card.data.language}
            playAudioPronunciation={this.playAudioPronunciation}
          />
        )}
        <span class="vocably-emphasized">{this.card.data.source}</span>
        {this.card.data.ipa && (
          <Fragment>
            <span class="vocably-invisible-space">&nbsp;</span>
            <span class="vocably-translation-margin-left vocably-muted">
              /{sanitizeTranscript(this.card.data.ipa)}/
            </span>
          </Fragment>
        )}
        {this.card.data.g && (
          <Fragment>
            <span class="vocably-invisible-space">&nbsp;</span>
            <span class="vocably-muted vocably-small vocably-translation-margin-left">
              ({this.card.data.g})
            </span>
          </Fragment>
        )}
        {this.card.data.partOfSpeech && (
          <Fragment>
            <span class="vocably-invisible-space ">&nbsp;</span>
            <span class="vocably-muted vocably-small vocably-translation-margin-left">
              {this.card.data.partOfSpeech}
            </span>
          </Fragment>
        )}
        {typeof this.card.data.frequency === 'number' &&
          this.renderFrequency(this.card.data.frequency)}
        {this.card.data.presentTenses && (
          <Fragment>
            {past && <br />}
            <span class="vocably-muted vocably-small vocably-translation-margin-left">
              (present: {this.card.data.presentTenses})
            </span>
          </Fragment>
        )}
        {past && (
          <Fragment>
            {this.card.data.presentTenses && <br />}
            <span class="vocably-muted vocably-small vocably-translation-margin-left">
              (past: {past})
            </span>
          </Fragment>
        )}

        {this.card.data.number === 'singular' &&
          isGoodPlural(this.card.data.pluralForm) && (
            <span class="vocably-muted vocably-small vocably-translation-margin-left">
              (plural: {this.card.data.pluralForm})
            </span>
          )}
      </Host>
    );
  }
}

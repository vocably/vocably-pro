import { Component, Fragment, h, Host, Prop } from '@stencil/core';
import {
  AudioPronunciationPayload,
  isGoogleTTSLanguage,
  Result,
  TranslationCard,
} from '@vocably/model';

@Component({
  tag: 'vocably-card-source',
  styleUrl: 'vocably-card-source.scss',
  shadow: false,
})
export class VocablyCardSource {
  @Prop() card: TranslationCard;
  @Prop() playAudioPronunciation: (
    payload: AudioPronunciationPayload
  ) => Promise<Result<true>>;

  render() {
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
              [{this.card.data.ipa}]
            </span>
          </Fragment>
        )}
        {this.card.data.partOfSpeech && (
          <Fragment>
            <span class="invisible-space ">&nbsp;</span>
            <span class="vocably-muted vocably-small vocably-translation-margin-left">
              {this.card.data.partOfSpeech}
            </span>
          </Fragment>
        )}
      </Host>
    );
  }
}

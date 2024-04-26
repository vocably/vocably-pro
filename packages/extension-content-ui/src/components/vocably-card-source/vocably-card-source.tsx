import { Component, Fragment, h, Host, Prop } from '@stencil/core';
import {
  isGoogleTTSLanguage,
  PlaySoundPayload,
  PlaySoundResponse,
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
  @Prop() playSound: (
    payload: PlaySoundPayload
  ) => Promise<Result<PlaySoundResponse>>;

  render() {
    return (
      <Host>
        {isGoogleTTSLanguage(this.card.data.language) && (
          <vocably-play-sound
            text={this.card.data.source}
            language={this.card.data.language}
            playSound={this.playSound}
          />
        )}
        <span class="emphasized">{this.card.data.source}</span>
        {this.card.data.partOfSpeech && (
          <Fragment>
            <span class="invisible-space ">&nbsp;</span>
            <span class="pos margin-left">{this.card.data.partOfSpeech}</span>
          </Fragment>
        )}
      </Host>
    );
  }
}

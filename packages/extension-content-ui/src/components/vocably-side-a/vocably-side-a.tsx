import { Component, Fragment, h, Host, Prop } from '@stencil/core';
import {
  isGoogleTTSLanguage,
  PlaySoundPayload,
  PlaySoundResponse,
  Result,
  TranslationCard,
} from '@vocably/model';
import { explode } from '@vocably/sulna';

@Component({
  tag: 'vocably-side-a',
  styleUrl: 'vocably-side-a.scss',
  shadow: false,
})
export class VocablySideA {
  @Prop() item: TranslationCard;
  @Prop() playSound: (
    payload: PlaySoundPayload
  ) => Promise<Result<PlaySoundResponse>>;

  render() {
    const examples = explode(this.item.data.example ?? '');

    return (
      <Host>
        {isGoogleTTSLanguage(this.item.data.language) && (
          <vocably-play-sound
            text={this.item.data.source}
            language={this.item.data.language}
            playSound={this.playSound}
          />
        )}
        <span class="emphasized">{this.item.data.source}</span>
        {this.item.data.partOfSpeech && (
          <Fragment>
            <span class="invisible-space ">&nbsp;</span>
            <span class="pos margin-left">{this.item.data.partOfSpeech}</span>
          </Fragment>
        )}
        {examples.length > 0 && (
          <div>
            <div class="mb-3 small">
              Usage example{examples.length > 1 ? 's' : ''}:
            </div>
            <div class="mb-6">
              {examples.length === 1 && examples[0]}
              {examples.length > 1 && (
                <ul class="list">
                  {examples.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </Host>
    );
  }
}

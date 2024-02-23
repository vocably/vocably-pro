import { Component, h, Host, Prop } from '@stencil/core';
import {
  GoogleTTSLanguage,
  PlaySoundPayload,
  PlaySoundResponse,
  Result,
} from '@vocably/model';

@Component({
  tag: 'vocably-play-sound',
  styleUrl: 'vocably-play-sound.scss',
  shadow: true,
})
export class VocablyPlaySound {
  @Prop() text: string;
  @Prop() language: GoogleTTSLanguage;

  @Prop() playSound: (
    payload: PlaySoundPayload
  ) => Promise<Result<PlaySoundResponse>>;

  @Prop() isPlaying: boolean = false;

  onPlaySoundClick = async () => {
    this.isPlaying = true;
    const result = await this.playSound({
      text: this.text,
      language: this.language,
    });

    if (result.success) {
      const audio = new Audio(result.value.url);
      audio.addEventListener('ended', () => {
        this.isPlaying = false;
      });
      audio.play();
    } else {
      this.isPlaying = false;
    }
  };

  render() {
    return (
      <Host>
        <button
          class="button"
          onClick={() => this.onPlaySoundClick()}
          disabled={this.isPlaying}
        >
          {!this.isPlaying && <vocably-icon-play-circle />}
          {this.isPlaying && <vocably-icon-volume-medium />}
        </button>
      </Host>
    );
  }
}

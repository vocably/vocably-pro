import { Component, h, Host, Prop, State } from '@stencil/core';
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

  @State() isLoading: boolean = false;
  @State() isPlaying: boolean = false;

  onPlaySoundClick = async () => {
    this.isLoading = true;
    const result = await this.playSound({
      text: this.text,
      language: this.language,
    });

    this.isLoading = false;

    if (result.success) {
      this.isPlaying = true;
      try {
        const audio = new Audio(result.value.url);
        audio.addEventListener('ended', () => {
          this.isPlaying = false;
        });
        audio.play();
      } catch (e) {
        this.isPlaying = false;
      }
    }
  };

  render() {
    return (
      <Host>
        <button
          class="button"
          onClick={() => this.onPlaySoundClick()}
          disabled={this.isPlaying || this.isLoading}
        >
          {!this.isLoading && !this.isPlaying && <vocably-icon-play-circle />}
          {(this.isLoading || this.isPlaying) && <vocably-icon-volume-medium />}
        </button>
      </Host>
    );
  }
}

import { Component, h, Host, Prop, State } from '@stencil/core';
import { GoogleLanguage } from '@vocably/model';

@Component({
  tag: 'vocably-play-sound',
  styleUrl: 'vocably-play-sound.scss',
  shadow: true,
})
export class VocablyPlaySound {
  @Prop() text: string;
  @Prop() language: GoogleLanguage;

  @State() playing = false;

  playSound() {
    this.playing = true;

    setTimeout(() => {
      this.playing = false;
    }, 1000);
  }

  render() {
    return (
      <Host>
        <button
          class="button"
          onClick={() => this.playSound()}
          disabled={this.playing}
        >
          {!this.playing && <vocably-icon-play-circle />}
          {this.playing && <vocably-icon-volume-medium />}
        </button>
      </Host>
    );
  }
}

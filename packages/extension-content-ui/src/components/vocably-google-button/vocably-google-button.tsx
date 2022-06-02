import { Component, h } from '@stencil/core';

@Component({
  tag: 'vocably-google-button',
  styleUrl: 'vocably-google-button.scss',
  shadow: true,
})
export class VocablyGoogleButton {
  render() {
    return (
      <button class="button">
        <div class="icon-container">
          <vocably-google-icon class="icon"></vocably-google-icon>
        </div>
        <div class="label">
          <slot></slot>
        </div>
      </button>
    );
  }
}

import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'vocably-button',
  styleUrl: 'vocably-button.scss',
  shadow: true,
})
export class VocablyButton {
  render() {
    return (
      <Host>
        <div class="button"></div>
      </Host>
    );
  }
}

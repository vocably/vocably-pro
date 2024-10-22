import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'vocably-icon-arrow-right',
  styleUrl: 'icon-arrow-right.scss',
  shadow: true,
})
export class VocablyIconArrowRight {
  render() {
    return (
      <Host>
        <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>menu-right</title>
          <path d="M10,17L15,12L10,7V17Z" />
        </svg>
      </Host>
    );
  }
}

import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'vocably-icon-play-circle',
  styleUrl: 'vocably-icon-play-circle.scss',
  shadow: true,
})
export class VocablyIconPlayCircle {
  render() {
    return (
      <Host>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svg">
          <path d="M10,16.5V7.5L16,12M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
        </svg>
      </Host>
    );
  }
}

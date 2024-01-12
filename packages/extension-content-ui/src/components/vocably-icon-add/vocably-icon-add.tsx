import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'vocably-icon-add',
  styleUrl: 'vocably-icon-add.scss',
  shadow: true,
})
export class VocablyIconAdd {
  render() {
    return (
      <Host>
        <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
        </svg>
      </Host>
    );
  }
}

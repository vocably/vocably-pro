import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'vocably-spinner',
  styleUrl: 'spinner.scss',
  shadow: true,
})
export class VocablySpinner {
  render() {
    return (
      <Host>
        <div class="spinner">
          <div class="bounce1"></div>
          <div class="bounce2"></div>
          <div class="bounce3"></div>
        </div>
      </Host>
    );
  }
}

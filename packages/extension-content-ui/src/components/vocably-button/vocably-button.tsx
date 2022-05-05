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
        <div class="button">
          <svg
            class="svg"
            viewBox="0 0 3267.9 3267.9"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="path"
              d="m2173 1670.5-58.16 120.79-487.58 1033h-22.36l-1104.9-2324.3h715.72l711.25 1507.8 111.83-241.59c250.5-520.66 384.7-945.53 398.12-1266.3h331.01c-174.45 299.9-362.32 687.28-594.94 1170.5z"
            />
          </svg>
        </div>
      </Host>
    );
  }
}

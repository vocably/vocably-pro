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
            viewBox="0 0 790 542"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M244 63A531 531 0 0 0 0 464a607 607 0 0 1 574-320s-335 5-521 366c101 27 321 68 485-28C785 338 790 48 790 48S461-70 244 63Z"
              fill="#346751"
            />
          </svg>
        </div>
      </Host>
    );
  }
}

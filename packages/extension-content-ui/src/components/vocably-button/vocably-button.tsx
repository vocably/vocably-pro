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
            fill="none"
            viewBox="0 0 208 188"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="path"
              d="M146 171c-4 1-8 4-9 8H0V9h137c1 4 5 7 9 8 5 1 9 2 11 5 2 2 4 6 5 11v49h-17c-7 0-12 5-12 12s5 12 12 12h17v49c-1 5-3 9-5 11-2 3-6 4-11 5Zm-32-74c13-28 23-50 33-68h-18c-1 19-9 44-22 74l-6 14-40-88H22l61 136h1l27-60 3-8Z"
            />
            <path
              class="path"
              d="M145 99c-3 0-5-2-5-5s2-5 5-5h24V33c-1-7-3-12-7-16-3-4-8-6-15-7-2 0-4-3-4-6 1-3 3-4 6-4 9 1 16 5 21 11l4 4 4-6c6-5 13-8 22-9 3 0 5 2 6 4 0 3-2 6-5 6-6 1-12 3-16 6-3 4-6 9-6 17v56h24c3 0 5 2 5 5s-2 5-5 5h-24v56c0 8 3 13 6 17 4 3 10 5 16 6 3 0 5 3 5 6-1 2-3 4-6 4-9-1-16-4-22-9l-4-6-4 4c-5 6-12 10-21 11-3 0-5-1-6-4 0-3 2-6 4-6 7-1 12-3 15-7 4-4 6-9 7-16V99h-24Z"
            />
          </svg>
        </div>
      </Host>
    );
  }
}

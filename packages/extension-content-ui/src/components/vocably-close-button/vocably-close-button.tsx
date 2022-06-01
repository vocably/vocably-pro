import { Component, h, Host, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'vocably-close-button',
  styleUrl: 'vocably-close-button.scss',
  shadow: true,
})
export class VocablyCloseButton {
  @Event() close: EventEmitter<void>;

  render() {
    return (
      <Host>
        <button class="button" onClick={() => this.close.emit()}>
          <svg
            class="svg"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path class="path" d="M10 0L0 10M0 0L10 10" />
          </svg>
        </button>
      </Host>
    );
  }
}

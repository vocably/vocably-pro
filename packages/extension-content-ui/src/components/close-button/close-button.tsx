import { Component, Event, EventEmitter, h, Host } from '@stencil/core';

@Component({
  tag: 'vocably-close-button',
  styleUrl: 'close-button.scss',
  shadow: false,
})
export class VocablyCloseButton {
  @Event() close: EventEmitter<void>;

  render() {
    return (
      <Host>
        <button
          class="vocably-close-button"
          onClick={() => this.close.emit()}
          onMouseDown={(e) => e.stopPropagation()}
          onMouseUp={(e) => e.stopPropagation()}
        >
          <svg
            class="vocably-close-svg"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path class="vocably-close-svg-path" d="M10 0L0 10M0 0L10 10" />
          </svg>
        </button>
      </Host>
    );
  }
}

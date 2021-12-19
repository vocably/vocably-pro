import { Component, Host, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'vocably-popup',
  styleUrl: 'vocably-popup.scss',
  shadow: true,
})
export class VocablyPopup {
  @Event() close: EventEmitter<void>;
  render() {
    return (
      <Host>
        <div class="popup">
          <div class="caption">
            <button class="close" onClick={() => this.close.emit()}>
              &times;
            </button>
          </div>
          <div class="body">
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}

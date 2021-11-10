import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'vocably-popup',
  styleUrl: 'vocably-popup.scss',
  shadow: true,
})
export class VocablyPopup {
  @Prop() phrase: string;
  @Prop() meaning: string;
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
            <div class="label">Dutch</div>
            <div class="phrase">{this.phrase}</div>

            <div class="label">English</div>
            <div class="meaning">{this.meaning}</div>
          </div>
        </div>
      </Host>
    );
  }
}

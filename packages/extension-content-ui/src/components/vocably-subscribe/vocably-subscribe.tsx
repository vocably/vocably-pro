import { Component, Host, h, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'vocably-subscribe',
  styleUrl: 'vocably-subscribe.scss',
  shadow: true,
})
export class VocablySubscribe {
  @Event() confirm: EventEmitter;

  render() {
    return (
      <Host>
        <div class="container">
          <div class="message">Please subscribe to proceed.</div>
          <div class="button-container">
            <button class="button" onClick={() => this.confirm.emit()}>
              Subscribe
            </button>
          </div>
        </div>
      </Host>
    );
  }
}

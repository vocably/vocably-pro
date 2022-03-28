import { Component, Host, h, EventEmitter, Event, Prop } from '@stencil/core';

@Component({
  tag: 'vocably-alert',
  styleUrl: 'vocably-alert.scss',
  shadow: true,
})
export class VocablyAlert {
  @Prop() message: string;
  @Prop() cta: string;

  @Event() confirm: EventEmitter;

  render() {
    return (
      <Host>
        <div class="container">
          <div class="message">{this.message}</div>
          <div class="button-container">
            <button class="button" onClick={() => this.confirm.emit()}>
              {this.cta}
            </button>
          </div>
        </div>
      </Host>
    );
  }
}

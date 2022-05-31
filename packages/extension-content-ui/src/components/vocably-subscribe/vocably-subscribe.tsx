import { Component, Host, h, EventEmitter, Event, Prop } from '@stencil/core';

@Component({
  tag: 'vocably-subscribe',
  styleUrl: 'vocably-subscribe.scss',
  shadow: true,
})
export class VocablySubscribe {
  @Prop() trial: boolean = false;
  @Event() confirm: EventEmitter;

  render() {
    return (
      <Host>
        <div class="container">
          <div class="message">
            {this.trial
              ? 'Request a 7 day free trial to proceed.'
              : 'Please subscribe to proceed.'}
          </div>
          <div class="button-container">
            <button class="button" onClick={() => this.confirm.emit()}>
              {this.trial ? 'Request a 7 day free trial' : 'Subscribe'}
            </button>
          </div>
        </div>
      </Host>
    );
  }
}

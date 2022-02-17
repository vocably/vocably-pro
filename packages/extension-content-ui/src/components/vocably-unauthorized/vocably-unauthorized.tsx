import { Component, Host, h, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'vocably-unauthorized',
  styleUrl: 'vocably-unauthorized.scss',
  shadow: true,
})
export class VocablyUnauthorized {
  @Event() signIn: EventEmitter;

  render() {
    return (
      <Host>
        <div class="container">
          <div class="message">
            You have to be signed in in order to proceed with translation.
          </div>
          <div class="button-container">
            <button class="button" onClick={() => this.signIn.emit()}>
              Sign In
            </button>
          </div>
        </div>
      </Host>
    );
  }
}

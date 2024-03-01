import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'vocably-rate',
  styleUrl: 'vocably-rate.scss',
  shadow: false,
})
export class VocablyRate {
  @Prop() extensionStoreUrl: string;
  @Event() userSelected: EventEmitter<
    'review' | 'later' | 'never' | 'feedback'
  >;

  render() {
    return (
      <Host>
        <div>
          <strong>You can help this project.</strong>
        </div>
        <div class="margin-top-2">Your review will make a big difference.</div>
        <div>
          If you are missing anything in the app, please{' '}
          <a
            href="https://app.vocably.pro/feedback"
            target="_blank"
            class="text-link"
            onClick={() => this.userSelected.emit('feedback')}
          >
            let me know
          </a>
          .
        </div>
        <div class="margin-top-2">
          <a
            href={this.extensionStoreUrl}
            target="_blank"
            class="button"
            onClick={() => this.userSelected.emit('review')}
          >
            Write a review
          </a>
          <button
            class="link-button"
            onClick={() => this.userSelected.emit('later')}
          >
            Ask me later
          </button>
        </div>
        <div class="margin-top-2">
          <button
            class="link-button text-link small"
            onClick={() => this.userSelected.emit('never')}
          >
            Please stop asking me about this.
          </button>
        </div>
      </Host>
    );
  }
}

import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'vocably-rate',
  styleUrl: 'rate.scss',
  shadow: false,
})
export class VocablyRate {
  @Event() userSelected: EventEmitter<
    'review' | 'later' | 'never' | 'feedback'
  >;

  @Prop() platform: { name: string; url: string };

  render() {
    return (
      <Host>
        <div>
          <strong>Your rating means a lot.</strong>
        </div>
        <div class="vocably-mt-12">
          Your positive review or rating on the {this.platform.name}
          <br />
          will make a huge difference for this project.
        </div>
        <div class="vocably-mt-12">
          If something's missing or not to your liking,{' '}
          <a
            href="https://app.vocably.pro/feedback"
            target="_blank"
            class="vocably-link-button"
            onClick={() => this.userSelected.emit('feedback')}
          >
            let me know
          </a>
          .<br /> I take all feedback seriously.
        </div>
        <div class="vocably-mt-12">
          <a
            href={this.platform.url}
            target="_blank"
            class="vocably-button"
            onClick={() => this.userSelected.emit('review')}
          >
            Yes, I want to rate Vocably
          </a>
          <button
            class="vocably-link-button"
            onClick={() => this.userSelected.emit('later')}
          >
            Ask me later.
          </button>
        </div>
        <div class="vocably-mt-12">
          <button
            class="vocably-link-button vocably-text-link vocably-small"
            onClick={() => this.userSelected.emit('never')}
          >
            Please stop asking me about this.
          </button>
        </div>
      </Host>
    );
  }
}

import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'vocably-rate',
  styleUrl: 'vocably-rate.scss',
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
          <strong>You can help this project.</strong>
        </div>
        <div class="vocably-mt-12">Vocably is 100% free and open-source.</div>
        <div class="vocably-mt-12">
          Your positive review on {this.platform.name} would help other users to
          discover this project.
        </div>
        <div class="vocably-mt-12">
          If you are missing or don't like something, you can always{' '}
          <a
            href="https://app.vocably.pro/feedback"
            target="_blank"
            class="vocably-text-link"
            onClick={() => this.userSelected.emit('feedback')}
          >
            let me know
          </a>
          .<br /> I take every feedback seriously.
        </div>
        <div class="vocably-mt-12">
          <a
            href={this.platform.url}
            target="_blank"
            class="vocably-button"
            onClick={() => this.userSelected.emit('review')}
          >
            Help this project. Leave a review.
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

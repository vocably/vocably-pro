import { Component, Host, h, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'vocably-sign-in',
  styleUrl: 'vocably-sign-in.scss',
  shadow: true,
})
export class VocablySignIn {
  @Event() confirm: EventEmitter;

  render() {
    return (
      <Host>
        <div class="container">
          <div class="p">Please sign in to proceed.</div>
          <div class="p">
            <button class="button" onClick={() => this.confirm.emit()}>
              <vocably-google-icon class="google-icon"></vocably-google-icon>
              Sign in with Google
            </button>
          </div>
          <div class="p muted">
            By signing in, you agree to our{' '}
            <a
              href="https://app.vocably.pro/page/terms-of-service"
              target="_blank"
            >
              Terms of Service
            </a>{' '}
            and{' '}
            <a
              href="https://app.vocably.pro/page/privacy-policy"
              target="_blank"
            >
              Privacy Policy
            </a>
            .
          </div>
        </div>
      </Host>
    );
  }
}

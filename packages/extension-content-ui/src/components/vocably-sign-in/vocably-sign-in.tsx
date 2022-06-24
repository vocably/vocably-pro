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
      <Host data-test="sign-in">
        <div class="p">Please sign in to proceed.</div>
        <div class="p">
          <vocably-google-button
            data-test="sign-in-button"
            onClick={() => this.confirm.emit()}
          >
            Sign in with Google
          </vocably-google-button>
        </div>
        <div>
          By signing in, you agree to our{' '}
          <a
            class="link"
            href="https://app.vocably.pro/page/terms-of-service"
            target="_blank"
          >
            Terms of Service
          </a>{' '}
          and{' '}
          <a
            class="link"
            href="https://app.vocably.pro/page/privacy-policy"
            target="_blank"
          >
            Privacy Policy
          </a>
          .
        </div>
      </Host>
    );
  }
}

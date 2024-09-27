import { Component, Event, EventEmitter, h, Host } from '@stencil/core';

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
          <button
            class="button"
            data-test="sign-in-button"
            onClick={() => this.confirm.emit()}
          >
            Sign in or Create an account
          </button>
        </div>
        <div>
          By signing in, you agree to our{' '}
          <a
            class="link"
            href="https://vocably.pro/terms-and-conditions.html"
            target="_blank"
          >
            Terms of Service
          </a>{' '}
          and{' '}
          <a
            class="link"
            href="https://vocably.pro/privacy-policy.html"
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

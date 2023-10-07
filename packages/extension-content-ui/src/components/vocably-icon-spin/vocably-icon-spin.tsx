import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'vocably-icon-spin',
  styleUrl: 'vocably-icon-spin.scss',
  shadow: true,
})
export class VocablyIconSpin {
  render() {
    return (
      <Host>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle class="spinner_VpEe" cx="12" cy="12" r="0" />
          <circle class="spinner_VpEe spinner_eahp" cx="12" cy="12" r="0" />
          <circle class="spinner_VpEe spinner_f7Y2" cx="12" cy="12" r="0" />
        </svg>
      </Host>
    );
  }
}

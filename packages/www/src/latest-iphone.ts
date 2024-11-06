import { html } from './latest-iphone.html';

const HTMLElement = typeof window !== 'undefined' && window?.HTMLElement;

export class HTMLLatestIphoneElement extends HTMLElement {
  image: SVGElement;
  constructor() {
    super();

    const styleEl = document.createElement('style');
    styleEl.innerHTML = `
      :host {
        display: inline-block;
      }
    `;

    const childImage = this.querySelector('img');
    const imgSrc = childImage.src;

    const shadowRoot = this.attachShadow({ mode: 'open' });

    if (this.getAttribute('nonce')) {
      styleEl.setAttribute('nonce', this.getAttribute('nonce'));
    }

    const mode = this.getAttribute('mode') ?? 'light';

    let preparedHtml = html;
    if (mode === 'dark') {
      preparedHtml = preparedHtml.replace(/#0D0D0E/g, '#ffffff');
    }

    shadowRoot.appendChild(styleEl);
    shadowRoot.innerHTML = shadowRoot.innerHTML + preparedHtml;

    const svgImage = shadowRoot.querySelector('#image');

    svgImage.setAttribute('href', imgSrc);
    childImage.remove();
  }

  private connectedCallback() {}
}

if (typeof window !== 'undefined') {
  window.customElements.define('latest-iphone', HTMLLatestIphoneElement);
}

import { html } from './android.html';

const HTMLElement = typeof window !== 'undefined' && window?.HTMLElement;

export class HTMLPixel9ProElement extends HTMLElement {
  image: SVGElement;
  constructor() {
    super();

    const styleEl = document.createElement('style');
    styleEl.innerHTML = `
      :host {
        display: inline-block;
        --width: auto;
      }

      .container {
        position: relative;
      }

      .screenshot {
        position: absolute;
        left: 4.1%;
        right: 5%;
        top: 2.05%;
        bottom: 2%;
        overflow: hidden;
        border-radius: calc(var(--width) * 0.126666666666667);
      }

      .frame {
        width: 100%;
        position: relative;
        top: 0;
        line-height: 0;
      }
    `;

    const shadowRoot = this.attachShadow({ mode: 'open' });

    if (this.getAttribute('nonce')) {
      styleEl.setAttribute('nonce', this.getAttribute('nonce'));
    }

    const mode = this.getAttribute('mode') ?? 'light';

    let preparedHtml = html;
    if (mode === 'dark') {
      preparedHtml = preparedHtml.replace(/#222227/g, '#ffffff');
    }

    shadowRoot.appendChild(styleEl);
    shadowRoot.innerHTML = shadowRoot.innerHTML + preparedHtml;
  }

  private connectedCallback() {
    const resizeObserver = new ResizeObserver(this.resetWidth.bind(this));
    resizeObserver.observe(this);
    this.resetWidth();
  }

  private resetWidth() {
    this.style.setProperty('--width', `${this.clientWidth}px`);
  }
}

if (typeof window !== 'undefined') {
  window.customElements.define('pixel-9-pro', HTMLPixel9ProElement);
}

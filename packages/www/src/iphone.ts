import { html } from './iphone.html';

const HTMLElement = typeof window !== 'undefined' && window?.HTMLElement;

export class HTMLiPhone16MaxElement extends HTMLElement {
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
        left: 3.49%;
        right: 3.49%;
        top: 1.39%;
        bottom: 1.38%;
        overflow: hidden;
        border-radius: calc(var(--width) * 0.122126436781609);
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
      preparedHtml = preparedHtml.replace(/#0D0D0E/g, '#ffffff');
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
  window.customElements.define('iphone-16-max', HTMLiPhone16MaxElement);
}

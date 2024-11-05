import { html } from './last-iphone.html';

let templateElement: HTMLTemplateElement;
const HTMLElement = typeof window !== 'undefined' && window?.HTMLElement;

export class HTMLLastIphoneElement extends HTMLElement {
  image: SVGElement;
  constructor() {
    super();

    const styleEl = document.createElement('style');
    styleEl.innerHTML = `
      last-iphone {
        display: inline-block;
      }
    `;

    if (this.getAttribute('nonce')) {
      styleEl.setAttribute('nonce', this.getAttribute('nonce'));
    }
    this.appendChild(styleEl);
    this.appendChild(templateElement.content.cloneNode(true));

    const svgImage = this.querySelector('#image0_2208_1154');
    const childImage = this.querySelector('img');
    svgImage.setAttribute('href', childImage.src);
    childImage.remove();
  }

  private connectedCallback() {}
}

if (typeof window !== 'undefined') {
  if (window.document) {
    templateElement = document.createElement('template');
    templateElement.innerHTML = html;
  }

  window.customElements.define('last-iphone', HTMLLastIphoneElement);
}

import { Component, Element, h, Host, Method } from '@stencil/core';

const animationDuration = 100;

@Component({
  tag: 'vocably-overlay',
  styleUrl: 'overlay.scss',
  shadow: true,
})
export class VocablyOverlay {
  @Element() el: HTMLElement;

  private backdrop!: HTMLElement;
  private overlay!: HTMLElement;

  @Method() hide() {
    this.backdrop.style.opacity = '0';
    this.overlay.style.opacity = '0';
    setTimeout(() => {
      this.el.remove();
    }, animationDuration);
  }

  componentWillLoad() {}

  componentDidLoad() {
    this.backdrop.addEventListener('click', () => {
      this.hide();
    });

    setTimeout(() => {
      this.backdrop.style.transition = `opacity ${animationDuration}ms ease-in-out`;
      this.backdrop.style.opacity = `var(--backdropOpacity)`;

      this.overlay.style.transition = `opacity ${animationDuration}ms ease-in-out`;
      this.overlay.style.opacity = `1`;
    }, 10);
  }

  render() {
    return (
      <Host>
        <div class="backdrop" ref={(el) => (this.backdrop = el)}></div>
        <div class="overlay" ref={(el) => (this.overlay = el)}>
          <slot />
        </div>
      </Host>
    );
  }
}

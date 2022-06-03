import {
  Component,
  Host,
  h,
  Event,
  Element,
  EventEmitter,
} from '@stencil/core';

@Component({
  tag: 'vocably-popup',
  styleUrl: 'vocably-popup.scss',
  shadow: true,
})
export class VocablyPopup {
  @Element() el: HTMLElement;
  @Event() close: EventEmitter<void>;

  componentDidRender() {
    const contentWrapper = this.el.shadowRoot.getElementById('content-wrapper');
    const content = this.el.shadowRoot.getElementById('content');
    const resizeObserver = new ResizeObserver(() => {
      const rect = content.getBoundingClientRect();
      contentWrapper.style.width = `${rect.width}px`;
      contentWrapper.style.height = `${rect.height}px`;
    });

    resizeObserver.observe(content);
  }

  render() {
    return (
      <Host>
        <div class="popup">
          <div class="body" id="body">
            <div class="content-wrapper" id="content-wrapper">
              <div class="content-unlimited">
                <div class="content" id="content">
                  <slot></slot>
                </div>
              </div>
            </div>
          </div>
          <div class="header">
            <vocably-logo class="logo"></vocably-logo>
            <vocably-close-button class="close"></vocably-close-button>
          </div>
          <div class="footer"></div>
        </div>
      </Host>
    );
  }
}

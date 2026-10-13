import {
  Component,
  Element,
  forceUpdate,
  h,
  Host,
  Prop,
  Watch,
} from '@stencil/core';
import { subscribeToLocale, t } from '../../i18n';
import { frequencyToLevel, MAX_FREQUENCY } from './frequency';

// Gap between the anchor and the tip of the arrow.
const ANCHOR_GAP = 10;
// Minimum distance between the hint and the viewport edges.
const VIEWPORT_MARGIN = 8;
// Keeps the arrow away from the rounded corners of the bubble.
const ARROW_EDGE_OFFSET = 14;

/**
 * Explains the frequency indicator of a card. It is positioned against the
 * viewport rather than its parent, because the popup body scrolls and would
 * clip anything sticking out of it.
 */
@Component({
  tag: 'vocably-frequency-hint',
  styleUrl: 'frequency-hint.scss',
  shadow: false,
})
export class VocablyFrequencyHint {
  @Element() el: HTMLElement;
  // 1 (rare) to 10 (most common)
  @Prop() frequency: number;
  @Prop() isPaid: boolean = false;
  @Prop() visible: boolean = false;
  // The element the arrow points to.
  @Prop() anchor: HTMLElement | undefined;

  private unsubLocale: (() => void) | undefined;

  connectedCallback() {
    this.unsubLocale = subscribeToLocale(this.el, () => forceUpdate(this.el));
    if (this.visible) {
      this.listenToViewport();
    }
  }

  disconnectedCallback() {
    this.unsubLocale?.();
    this.stopListeningToViewport();
  }

  @Watch('visible')
  onVisibleChange(visible: boolean) {
    if (visible) {
      this.listenToViewport();
    } else {
      this.stopListeningToViewport();
    }
  }

  componentDidRender() {
    if (this.visible) {
      this.position();
    }
  }

  private listenToViewport() {
    window.addEventListener('scroll', this.position, true);
    window.addEventListener('resize', this.position);
  }

  private stopListeningToViewport() {
    window.removeEventListener('scroll', this.position, true);
    window.removeEventListener('resize', this.position);
  }

  private position = () => {
    if (!this.anchor) {
      return;
    }

    const anchorRect = this.anchor.getBoundingClientRect();
    const { offsetWidth: width, offsetHeight: height } = this.el;
    const viewportWidth = document.documentElement.clientWidth;
    const viewportHeight = document.documentElement.clientHeight;

    const anchorCenter = anchorRect.left + anchorRect.width / 2;
    const left = Math.min(
      Math.max(anchorCenter - width / 2, VIEWPORT_MARGIN),
      viewportWidth - width - VIEWPORT_MARGIN
    );
    const arrowX = Math.min(
      Math.max(anchorCenter - left, ARROW_EDGE_OFFSET),
      width - ARROW_EDGE_OFFSET
    );

    const fitsBelow =
      anchorRect.bottom + ANCHOR_GAP + height <=
      viewportHeight - VIEWPORT_MARGIN;
    const fitsAbove = anchorRect.top - ANCHOR_GAP - height >= VIEWPORT_MARGIN;
    const placement = fitsBelow || !fitsAbove ? 'below' : 'above';
    const top =
      placement === 'below'
        ? anchorRect.bottom + ANCHOR_GAP
        : anchorRect.top - ANCHOR_GAP - height;

    // A transformed ancestor (e.g. the content script popup, which is placed
    // with a transform) becomes the containing block of a fixed element, so
    // the viewport coordinates land shifted. Measure the shift and undo it.
    this.el.style.left = `${left}px`;
    this.el.style.top = `${top}px`;
    const placedRect = this.el.getBoundingClientRect();
    this.el.style.left = `${2 * left - placedRect.left}px`;
    this.el.style.top = `${2 * top - placedRect.top}px`;
    this.el.style.setProperty('--arrow-x', `${arrowX}px`);
    this.el.setAttribute('data-placement', placement);
  };

  render() {
    const level = frequencyToLevel(this.frequency);
    const score = Math.min(
      Math.max(Math.round(this.frequency), 1),
      MAX_FREQUENCY
    );

    return (
      <Host
        role="tooltip"
        aria-hidden={this.visible ? 'false' : 'true'}
        class={{ 'vocably-frequency-hint-visible': this.visible }}
      >
        <div class="vocably-frequency-hint-bubble">
          <div class="vocably-frequency-hint-header">
            <span class="vocably-frequency-hint-title">
              {t(`card_source.frequency_${level}`)}
            </span>
            <span class="vocably-frequency-hint-score">
              {t('frequency_hint.score', { score, max: MAX_FREQUENCY })}
            </span>
          </div>
          <div class="vocably-frequency-hint-scale">
            <div
              class="vocably-frequency-hint-scale-fill"
              style={{ width: `${(score / MAX_FREQUENCY) * 100}%` }}
            />
          </div>
          <div class="vocably-frequency-hint-text">
            {t('frequency_hint.description', { max: MAX_FREQUENCY })}
          </div>
          <div class="vocably-frequency-hint-premium">
            <span class="vocably-frequency-hint-badge">
              {t('frequency_hint.premium_badge')}
            </span>
            <span class="vocably-frequency-hint-text">
              {t('frequency_hint.premium')}{' '}
              <span class="vocably-frequency-hint-strong">
                {this.isPaid
                  ? t('frequency_hint.premium_paid')
                  : t('frequency_hint.premium_free')}
              </span>
            </span>
          </div>
        </div>
      </Host>
    );
  }
}

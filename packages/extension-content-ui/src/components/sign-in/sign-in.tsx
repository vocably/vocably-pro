import {
  Component,
  Element,
  Event,
  EventEmitter,
  forceUpdate,
  h,
  Host,
  Prop,
} from '@stencil/core';
import { GoogleLanguage } from '@vocably/model';
import { subscribeToLocale, t } from '../../i18n';

type Benefit = {
  key: string;
  // Lucide icons (stroke-based, 24x24 viewBox)
  icon: string;
};

const benefits: Benefit[] = [
  {
    // monitor-smartphone
    key: 'sign_in.benefit.study',
    icon: 'M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8M10 19v-3.96M7 19h5M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2z',
  },
  {
    // refresh-cw
    key: 'sign_in.benefit.sync',
    icon: 'M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8M21 3v5h-5M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16M8 16H3v5',
  },
  {
    // file-spreadsheet
    key: 'sign_in.benefit.export',
    icon: 'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7ZM14 2v4a2 2 0 0 0 2 2h4M8 13h2M14 13h2M8 17h2M14 17h2',
  },
];

type Platform = {
  name: string;
  // Material Design Icons
  icon: string;
};

const platforms: Platform[] = [
  {
    name: 'iOS',
    icon: 'M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z',
  },
  {
    name: 'Android',
    icon: 'M16.61 15.15C16.15 15.15 15.77 14.78 15.77 14.32S16.15 13.5 16.61 13.5H16.61C17.07 13.5 17.45 13.86 17.45 14.32C17.45 14.78 17.07 15.15 16.61 15.15M7.41 15.15C6.95 15.15 6.57 14.78 6.57 14.32C6.57 13.86 6.95 13.5 7.41 13.5H7.41C7.87 13.5 8.24 13.86 8.24 14.32C8.24 14.78 7.87 15.15 7.41 15.15M16.91 10.14L18.58 7.26C18.67 7.09 18.61 6.88 18.45 6.79C18.28 6.69 18.07 6.75 18 6.92L16.29 9.83C14.95 9.22 13.5 8.9 12 8.91C10.47 8.91 9 9.24 7.73 9.82L6.04 6.91C5.95 6.74 5.74 6.68 5.57 6.78C5.4 6.87 5.35 7.08 5.44 7.25L7.1 10.13C4.25 11.69 2.29 14.58 2 18H22C21.72 14.59 19.77 11.7 16.91 10.14H16.91Z',
  },
  {
    name: 'Chrome',
    icon: 'M12,20L15.46,14H15.45C15.79,13.4 16,12.73 16,12C16,10.8 15.46,9.73 14.62,9H19.41C19.79,9.93 20,10.94 20,12A8,8 0 0,1 12,20M4,12C4,10.54 4.39,9.18 5.07,8L8.54,14H8.55C9.24,15.19 10.5,16 12,16C12.45,16 12.88,15.91 13.29,15.77L10.89,19.91C7,19.37 4,16.04 4,12M15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9A3,3 0 0,1 15,12M12,4C14.96,4 17.54,5.61 18.92,8H12C10.06,8 8.45,9.38 8.08,11.21L5.7,7.08C7.16,5.21 9.44,4 12,4M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z',
  },
  {
    name: 'Edge',
    icon: 'M10.86 15.37C10.17 14.6 9.7 13.68 9.55 12.65C9.25 13.11 9 13.61 8.82 14.15C7.9 16.9 9.5 20.33 12.22 21.33C14.56 22.11 17.19 20.72 18.92 19.2C19.18 18.85 21.23 17.04 20.21 16.84C17.19 18.39 13.19 17.95 10.86 15.37M11.46 9.56C12.5 9.55 11.5 9.13 11.07 8.81C10.03 8.24 8.81 7.96 7.63 7.96C3.78 8 .995 10.41 2.3 14.4C3.24 18.28 6.61 21.4 10.59 21.9C8.54 20.61 7.3 18.19 7.3 15.78C7.38 13.25 8.94 10.28 11.46 9.56M2.78 8.24C5.82 6 10.66 6.18 13.28 9C14.3 10.11 15 12 14.07 13.37C12.33 15.25 17.15 15.5 18.18 15.22C21.92 14.5 22.91 10.15 21.13 7.15C19.43 3.75 15.66 1.97 11.96 2C7.9 1.93 4.25 4.5 2.78 8.24Z',
  },
  {
    name: 'Safari',
    icon: 'M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,14.09 4.8,16 6.11,17.41L9.88,9.88L17.41,6.11C16,4.8 14.09,4 12,4M12,20A8,8 0 0,0 20,12C20,9.91 19.2,8 17.89,6.59L14.12,14.12L6.59,17.89C8,19.2 9.91,20 12,20M12,12L11.23,11.23L9.7,14.3L12.77,12.77L12,12M12,17.5H13V19H12V17.5M15.88,15.89L16.59,15.18L17.65,16.24L16.94,16.95L15.88,15.89M17.5,12V11H19V12H17.5M12,6.5H11V5H12V6.5M8.12,8.11L7.41,8.82L6.35,7.76L7.06,7.05L8.12,8.11M6.5,12V13H5V12H6.5Z',
  },
];

// Longer sources (phrases, sentences) fall back to the generic title
const maxSourceLength = 30;

// Replaces {placeholders} in a translated string with JSX nodes
const interpolate = (template: string, params: Record<string, any>) =>
  template.split(/(\{\w+\})/).map((part) => {
    const match = part.match(/^\{(\w+)\}$/);
    return match && match[1] in params ? params[match[1]] : part;
  });

@Component({
  tag: 'vocably-sign-in',
  styleUrl: 'sign-in.scss',
  shadow: true,
})
export class VocablySignIn {
  @Element() el: HTMLElement;
  @Event() confirm: EventEmitter;
  @Event() dismiss: EventEmitter<void>;
  @Prop() source: string | undefined;
  @Prop() sourceLanguage: GoogleLanguage = 'en';
  @Prop() targetLanguage: GoogleLanguage = 'en';

  private unsubLocale: (() => void) | undefined;

  connectedCallback() {
    this.unsubLocale = subscribeToLocale(this.el, () => forceUpdate(this.el));
  }

  disconnectedCallback() {
    this.unsubLocale?.();
  }

  private renderTitle() {
    const source = this.source?.trim();

    if (!source || source.length > maxSourceLength) {
      return this.sourceLanguage === this.targetLanguage
        ? t('sign_in.title.lookups')
        : t('sign_in.title.translations');
    }

    return interpolate(t('sign_in.title.source'), {
      source: <span class="source">{source}</span>,
    });
  }

  render() {
    return (
      <Host data-test="sign-in">
        <div class="container">
          <div class="top">
            <div class="platforms">
              <span class="platforms-label">{t('sign_in.platforms')}</span>
              <ul class="platforms-list">
                {platforms.map((platform) => (
                  <li
                    class="platform"
                    key={platform.name}
                    data-name={platform.name}
                    tabIndex={0}
                    aria-label={platform.name}
                  >
                    <svg
                      class="platform-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d={platform.icon} />
                    </svg>
                  </li>
                ))}
              </ul>
            </div>
            <vocably-close-button
              class="close"
              onClose={(event) => {
                // Otherwise the whole popup is being closed
                event.stopPropagation();
                this.dismiss.emit();
              }}
            />
          </div>
          <div class="header">
            <div class="title">{this.renderTitle()}</div>
          </div>
          <ul class="benefits">
            {benefits.map((benefit) => (
              <li class="benefit" key={benefit.key}>
                <span class="benefit-icon-tile">
                  <svg
                    class="benefit-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d={benefit.icon} />
                  </svg>
                </span>
                <span class="benefit-text">{t(benefit.key)}</span>
              </li>
            ))}
          </ul>
          <button
            class="button"
            data-test="sign-in-button"
            onClick={() => this.confirm.emit()}
          >
            <span>{t('sign_in.button')}</span>
            <svg
              class="button-arrow"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
            </svg>
          </button>
        </div>
      </Host>
    );
  }
}

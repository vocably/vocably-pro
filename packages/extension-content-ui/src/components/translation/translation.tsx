import {
  Component,
  Element,
  Event,
  EventEmitter,
  Fragment,
  h,
  Host,
  Method,
  Prop,
  State,
} from '@stencil/core';
import {
  AddCardPayload,
  AudioPronunciationPayload,
  GoogleLanguage,
  isCardItem,
  isDetachedCardItem,
  isGoogleTTSLanguage,
  languageList,
  RateInteractionPayload,
  RemoveCardPayload,
  Result,
  TranslationCard,
  TranslationCards,
} from '@vocably/model';
import { isDirectNecessary } from './isDirectNecessary';
import { sortLanguages } from './sortLanguages';

@Component({
  tag: 'vocably-translation',
  styleUrl: 'translation.scss',
  shadow: true,
})
export class VocablyTranslation {
  @Prop() phrase: string;
  @Prop() result: Result<TranslationCards> | null = null;
  @Prop() loading: boolean = false;
  @Prop() existingSourceLanguages: GoogleLanguage[] = [];
  @Prop() existingTargetLanguages: GoogleLanguage[] = [];
  @Prop() isFeedbackEnabled: boolean = true;
  @Prop() askForRating: boolean = false;
  @Prop() sourceLanguage: string = '';
  @Prop() targetLanguage: string = '';
  @Prop() isUpdating: TranslationCard | null = null;
  @Prop() showSaveHint: boolean = true;
  @Prop() canCongratulate: boolean = false;
  @Prop() playAudioPronunciation: (
    payload: AudioPronunciationPayload
  ) => Promise<Result<true>>;
  @Prop() extensionPlatform: { name: string; url: string };

  @Event() ratingInteraction: EventEmitter<RateInteractionPayload>;

  @Event() changeSourceLanguage: EventEmitter<string>;
  @Event() changeTargetLanguage: EventEmitter<string>;
  @Event() removeCard: EventEmitter<RemoveCardPayload>;
  @Event() addCard: EventEmitter<AddCardPayload>;

  @State() saveCardClicked = false;
  @State() addedItemIndex = -1;

  @Element() el: HTMLElement;

  @Method()
  async play() {
    const playSoundElement =
      this.el.shadowRoot.querySelector('vocably-play-sound');

    if (!playSoundElement) {
      return;
    }

    playSoundElement.play();
  }

  private tagsMenuBackdrop: HTMLElement | null = null;
  private tagsMenu: HTMLElement | null = null;

  private showTagMenu(caller: HTMLElement) {
    if (this.result === null || !this.result.success) {
      return;
    }

    if (this.tagsMenuBackdrop) {
      this.tagsMenuBackdrop.remove();
    }

    if (this.tagsMenu) {
      this.tagsMenu.remove();
    }

    const tagsMenuBackdrop = document.createElement('div');
    tagsMenuBackdrop.style.position = 'absolute';
    tagsMenuBackdrop.style.inset = '0px';
    tagsMenuBackdrop.style.height = `${document.body.clientHeight}px`;

    const tagsMenu = document.createElement('vocably-tags-menu');
    tagsMenu.existingItems = this.result.value.tags;
    tagsMenu.style.position = 'absolute';

    const callerPosition = caller.getBoundingClientRect();
    console.log(callerPosition);
    tagsMenu.style.right = `${
      window.innerWidth - window.scrollX - callerPosition.right
    }px`;

    if (callerPosition.top * 2 > window.innerHeight) {
      tagsMenu.style.bottom = `${
        window.innerHeight - window.scrollY - callerPosition.bottom
      }px`;
    } else {
      tagsMenu.style.top = `${window.scrollY + callerPosition.top}px`;
    }

    tagsMenuBackdrop.addEventListener('click', () => {
      this.tagsMenu = null;
      this.tagsMenuBackdrop = null;

      tagsMenu && tagsMenu.style.setProperty('--opacity', '0');
      tagsMenuBackdrop && tagsMenuBackdrop.remove();

      setTimeout(() => {
        tagsMenu && tagsMenu.remove();
      }, 200);
    });

    window.document.body.appendChild(tagsMenuBackdrop);
    window.document.body.appendChild(tagsMenu);

    this.tagsMenuBackdrop = tagsMenuBackdrop;
    this.tagsMenu = tagsMenu;
  }

  private askForRatingContainer: HTMLDivElement;

  render() {
    const sourceLanguageSelector = this.result && this.result.success && (
      <select
        class="vocably-input-select"
        disabled={this.loading}
        onChange={(event) =>
          this.changeSourceLanguage.emit(
            (event.target as HTMLSelectElement).value
          )
        }
      >
        {Object.entries(languageList)
          .sort(sortLanguages(this.existingSourceLanguages))
          .map(([code, name]) => (
            <option selected={this.sourceLanguage === code} value={code}>
              {name}
            </option>
          ))}
      </select>
    );

    const targetLanguageSelector = this.result && this.result.success && (
      <select
        class="vocably-input-select"
        disabled={this.loading}
        onChange={(event) =>
          this.changeTargetLanguage.emit(
            (event.target as HTMLSelectElement).value
          )
        }
      >
        {Object.entries(languageList)
          .sort(sortLanguages(this.existingTargetLanguages))
          .map(([code, name]) => (
            <option selected={this.targetLanguage === code} value={code}>
              {name}
            </option>
          ))}
      </select>
    );

    const showDirect =
      this.result &&
      this.result.success &&
      isDirectNecessary(this.result.value);

    return (
      <Host data-test="translation-container">
        <div class="vocably-loading-container">
          {this.result === null && <vocably-spinner></vocably-spinner>}
          {this.result && this.result.success === false && (
            <div class="vocably-error">An error has occurred.</div>
          )}
          {this.result && this.result.success === true && (
            <Fragment>
              <div class="vocably-translation" data-test="translation">
                <div class="vocably-translation-section">
                  <div class="vocably-mb-12 vocably-language-selector">
                    <div class="vocably-language-wrapper">
                      {sourceLanguageSelector}
                    </div>
                    <vocably-icon-arrow-right class="vocably-from-to"></vocably-icon-arrow-right>
                    <div class="vocably-language-wrapper">
                      {targetLanguageSelector}
                    </div>
                  </div>
                  {showDirect && (
                    <div class="vocably-mb-12">
                      <div class="vocably-small vocably-muted vocably-mb-4">
                        ChatGPT thinks that{' '}
                      </div>
                      <span class="vocably-emphasized">
                        {isGoogleTTSLanguage(
                          this.result.value.translation.sourceLanguage
                        ) && (
                          <vocably-play-sound
                            text={this.phrase}
                            language={
                              this.result.value.translation.sourceLanguage
                            }
                            playAudioPronunciation={this.playAudioPronunciation}
                          />
                        )}
                        {this.phrase}
                      </span>{' '}
                      means <i>{this.result.value.translation.target}</i>
                    </div>
                  )}
                  <div class="vocably-save-hint-container">
                    {this.showSaveHint && (
                      <vocably-add-card-hint
                        class={{
                          'vocably-save-hint': true,
                          'vocably-save-hint-hidden': this.saveCardClicked,
                        }}
                      ></vocably-add-card-hint>
                    )}

                    <div class="vocably-cards" data-test="cards">
                      {this.result.value.cards.map((card, itemIndex) => (
                        <div data-test="card" class="vocably-card">
                          <div class="vocably-card-action">
                            {isCardItem(card) && (
                              <div
                                style={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                  gap: '8px',
                                }}
                              >
                                <button
                                  class="vocably-card-action-button"
                                  title="Remove card"
                                  disabled={this.isUpdating !== null}
                                  onClick={() => {
                                    this.saveCardClicked = true;
                                    if (this.addedItemIndex === itemIndex) {
                                      this.addedItemIndex = -1;
                                    }
                                    this.result.success === true &&
                                      this.removeCard.emit({
                                        translationCards: this.result.value,
                                        card,
                                      });
                                  }}
                                >
                                  {this.isUpdating === card && (
                                    <vocably-icon-spin></vocably-icon-spin>
                                  )}
                                  {this.isUpdating !== card && (
                                    <vocably-icon-remove></vocably-icon-remove>
                                  )}
                                </button>

                                <button
                                  class="vocably-card-action-button"
                                  title="Edit tags"
                                  disabled={this.isUpdating !== null}
                                  onClick={(e) =>
                                    e.target &&
                                    this.showTagMenu(e.target as HTMLElement)
                                  }
                                >
                                  {this.isUpdating !== card && (
                                    <vocably-icon-tag></vocably-icon-tag>
                                  )}
                                </button>
                              </div>
                            )}
                            {isDetachedCardItem(card) && (
                              <button
                                class="vocably-card-action-button"
                                title="Add card"
                                disabled={this.isUpdating !== null}
                                onClick={() => {
                                  this.saveCardClicked = true;
                                  if (this.addedItemIndex === -1) {
                                    this.addedItemIndex = itemIndex;
                                  }
                                  this.result.success === true &&
                                    this.addCard.emit({
                                      translationCards: this.result.value,
                                      card,
                                    });
                                }}
                              >
                                {this.isUpdating === card && (
                                  <vocably-icon-spin></vocably-icon-spin>
                                )}
                                {this.isUpdating !== card && (
                                  <vocably-icon-add></vocably-icon-add>
                                )}
                              </button>
                            )}
                          </div>
                          <div
                            class={{
                              'vocably-safe-action-area': true,
                              'vocably-card-hint-displayed':
                                itemIndex === 0 && this.showSaveHint,
                            }}
                          >
                            <vocably-card-source
                              card={card}
                              playAudioPronunciation={
                                this.playAudioPronunciation
                              }
                              class="vocably-mb-6"
                            ></vocably-card-source>
                            <vocably-card-definitions
                              class="vocably-mb-6"
                              card={card}
                            ></vocably-card-definitions>
                            {card.data.example && (
                              <div>
                                <div class="vocably-small vocably-mb-6">
                                  Example:
                                </div>
                                <vocably-card-examples
                                  example={card.data.example}
                                ></vocably-card-examples>
                              </div>
                            )}
                          </div>
                          {this.canCongratulate && (
                            <div
                              class={
                                'vocably-added-congratulation' +
                                (this.addedItemIndex === itemIndex
                                  ? ' vocably-added-congratulation-visible'
                                  : '')
                              }
                            >
                              <div class="vocably-added-congratulation-content">
                                <div class="vocably-added-congratulation-content-1">
                                  <vocably-first-translation-congratulation></vocably-first-translation-congratulation>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  {this.askForRating && (
                    <div
                      class="vocably-rate-container"
                      ref={(el) => (this.askForRatingContainer = el)}
                    >
                      <div class="vocably-cards vocably-rate-padding vocably-mt-12">
                        <vocably-rate
                          platform={this.extensionPlatform}
                          onUserSelected={(choiceEvent) => {
                            switch (choiceEvent.detail) {
                              case 'review':
                              case 'feedback':
                                break;
                              case 'later':
                                this.askForRatingContainer.classList.add(
                                  'vocably-rate-container-hidden'
                                );
                                break;
                              case 'never':
                                this.askForRatingContainer.classList.add(
                                  'vocably-rate-container-hidden'
                                );
                                break;
                            }

                            this.ratingInteraction.emit(choiceEvent.detail);
                          }}
                        ></vocably-rate>
                      </div>
                    </div>
                  )}
                  {this.isFeedbackEnabled && !this.askForRating && (
                    <div class="vocably-mt-12 vocably-text-right vocably-small">
                      <a
                        href="https://app.vocably.pro/feedback"
                        target="_blank"
                        class="vocably-text-link"
                      >
                        Are you missing anything? Feel free to let me know.
                      </a>
                    </div>
                  )}
                </div>
              </div>
              {this.loading && (
                <div class="vocably-reload" data-test="reload">
                  <vocably-spinner></vocably-spinner>
                </div>
              )}
            </Fragment>
          )}
        </div>
      </Host>
    );
  }
}

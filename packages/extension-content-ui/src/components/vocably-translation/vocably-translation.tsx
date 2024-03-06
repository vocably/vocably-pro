import {
  Component,
  Event,
  EventEmitter,
  Fragment,
  h,
  Host,
  Prop,
  State,
} from '@stencil/core';
import {
  AddCardPayload,
  getFullLanguageName,
  GoogleLanguage,
  isCardItem,
  isDetachedCardItem,
  isGoogleTTSLanguage,
  languageList,
  PlaySoundPayload,
  PlaySoundResponse,
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
  styleUrl: 'vocably-translation.scss',
  shadow: true,
})
export class VocablyTranslation {
  @Prop() phrase: string;
  @Prop() result: Result<TranslationCards> | null = null;
  @Prop() loading: boolean = false;
  @Prop() existingLanguages: GoogleLanguage[] = [];
  @Prop() isFeedbackEnabled: boolean = true;
  @Prop() askForRating: boolean = false;
  @Prop() language: string = '';
  @Prop() isUpdating: TranslationCard | null = null;
  @Prop() showSaveHint: boolean = true;
  @Prop() playSound: (
    payload: PlaySoundPayload
  ) => Promise<Result<PlaySoundResponse>>;
  @Prop() extensionPlatform: { name: string; url: string };
  @Prop() preview = false;

  @Event() ratingInteraction: EventEmitter<RateInteractionPayload>;

  @Event()
  changeLanguage: EventEmitter<string>;
  @Event() removeCard: EventEmitter<RemoveCardPayload>;
  @Event() addCard: EventEmitter<AddCardPayload>;

  @State() saveCardClicked = false;

  private askForRatingContainer: HTMLDivElement;

  render() {
    let languageSelector: any;

    if (this.result && this.result.success && !this.preview) {
      languageSelector = (
        <select
          data-test="language-selector"
          disabled={this.loading}
          onChange={(event) =>
            this.changeLanguage.emit((event.target as HTMLSelectElement).value)
          }
        >
          {Object.entries(languageList)
            .sort(sortLanguages(this.existingLanguages))
            .map(([code, name]) => (
              <option selected={this.language === code} value={code}>
                {name}
              </option>
            ))}
        </select>
      );
    }

    if (this.result && this.result.success && this.preview) {
      languageSelector = <span>{languageList[this.language]}</span>;
    }

    const showDirect =
      this.result &&
      this.result.success &&
      isDirectNecessary(this.result.value);

    return (
      <Host data-test="translation-container">
        <div class="loading-container">
          {this.result === null && <vocably-spinner></vocably-spinner>}
          {this.result && this.result.success === false && (
            <div class="error">An error has occurred.</div>
          )}
          {this.result && this.result.success === true && (
            <Fragment>
              <div class="translation" data-test="translation">
                {showDirect && (
                  <div class="section">
                    <div class="margin-bottom-1">{languageSelector}</div>
                    <div class="margin-left emphasized margin-bottom-2">
                      {isGoogleTTSLanguage(
                        this.result.value.translation.sourceLanguage
                      ) && (
                        <vocably-play-sound
                          preview={this.preview}
                          text={this.phrase}
                          language={
                            this.result.value.translation.sourceLanguage
                          }
                          playSound={this.playSound}
                        />
                      )}
                      {this.phrase}
                    </div>

                    <Fragment>
                      <div
                        class="margin-bottom-1"
                        data-test="translation-language"
                      >
                        {getFullLanguageName(
                          this.result.value.translation.targetLanguage
                        )}
                      </div>
                      <div class="margin-left emphasized margin-bottom-1">
                        {this.result.value.translation.target}
                      </div>
                    </Fragment>
                  </div>
                )}
                <div class="section">
                  {!showDirect && (
                    <div class="margin-bottom-2">{languageSelector}</div>
                  )}
                  <div class="save-hint-container">
                    {this.showSaveHint && (
                      <vocably-add-card-hint
                        class={{
                          'save-hint': true,
                          hidden: this.saveCardClicked,
                        }}
                      ></vocably-add-card-hint>
                    )}

                    <div class="cards" data-test="cards">
                      {this.result.value.cards.map((card) => (
                        <div data-test="card" class="card">
                          <div class="card-action">
                            {isCardItem(card) && (
                              <button
                                class="card-action-button"
                                title="Remove card"
                                disabled={this.isUpdating !== null}
                                onClick={() => {
                                  this.saveCardClicked = true;
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
                            )}
                            {isDetachedCardItem(card) && (
                              <button
                                class="card-action-button"
                                title="Add card"
                                disabled={this.isUpdating !== null}
                                onClick={() => {
                                  this.saveCardClicked = true;
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
                            class={{ 'card-hint-displayed': this.showSaveHint }}
                          >
                            <span class="small">Side</span>{' '}
                            <span class="text-primary">A</span>
                          </div>
                          <div class="margin-left">
                            {isGoogleTTSLanguage(card.data.language) && (
                              <vocably-play-sound
                                preview={this.preview}
                                text={card.data.source}
                                language={card.data.language}
                                playSound={this.playSound}
                              />
                            )}
                            <span class="emphasized">{card.data.source}</span>
                            {card.data.partOfSpeech && (
                              <Fragment>
                                <span class="invisible-space ">&nbsp;</span>
                                <span class="pos margin-left">
                                  {card.data.partOfSpeech}
                                </span>
                              </Fragment>
                            )}
                          </div>

                          <div>
                            <span class="small">Side</span>{' '}
                            <span class="text-primary">B</span>
                          </div>
                          <div class="margin-left">
                            <vocably-side-b item={card}></vocably-side-b>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {this.askForRating && (
                    <div
                      class="rate-container"
                      ref={(el) => (this.askForRatingContainer = el)}
                    >
                      <div class="cards rate-padding margin-top-2">
                        <vocably-rate
                          platform={this.extensionPlatform}
                          onUserSelected={(choiceEvent) => {
                            switch (choiceEvent.detail) {
                              case 'review':
                              case 'feedback':
                                break;
                              case 'later':
                                this.askForRatingContainer.classList.add(
                                  'hidden'
                                );
                                break;
                              case 'never':
                                this.askForRatingContainer.classList.add(
                                  'hidden'
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
                    <div class="margin-top-2 text-right small">
                      <a
                        href="https://app.vocably.pro/feedback"
                        target="_blank"
                        class="text-link"
                      >
                        Are you missing anything? Feel free to let me know.
                      </a>
                    </div>
                  )}
                </div>
              </div>
              {this.loading && (
                <div class="reload" data-test="reload">
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

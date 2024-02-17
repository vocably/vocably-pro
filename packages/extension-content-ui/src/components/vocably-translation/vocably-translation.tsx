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
  languageList,
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
  @Prop() language: string = '';
  @Prop() isUpdating: TranslationCard | null = null;
  @Prop() showSaveHint: boolean = true;
  @Event() changeLanguage: EventEmitter<string>;
  @Event() removeCard: EventEmitter<RemoveCardPayload>;
  @Event() addCard: EventEmitter<AddCardPayload>;

  @State() saveCardClicked = false;

  render() {
    const languageSelector = this.result && this.result.success && (
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
                      <vocably-play-sound
                        text={this.phrase}
                        language={this.result.value.translation.sourceLanguage}
                      />
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
                            <vocably-play-sound
                              text={card.data.source}
                              language={card.data.language as GoogleLanguage}
                            />
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
                  {this.isFeedbackEnabled && (
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

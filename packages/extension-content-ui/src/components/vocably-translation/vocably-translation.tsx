import {
  Component,
  Event,
  EventEmitter,
  Fragment,
  h,
  Host,
  Prop,
} from '@stencil/core';
import {
  getFullLanguageName,
  GoogleLanguage,
  languageList,
  Result,
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
  @Prop() language: string = '';
  @Event() changeLanguage: EventEmitter<string>;

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

                  <div class="cards" data-test="cards">
                    {this.result.value.cards.map((card, index, collection) => (
                      <div
                        data-test="card"
                        class={
                          'card' + (collection.length > 1 ? ' has-number' : '')
                        }
                      >
                        {collection.length > 1 && (
                          <div class="number">{index + 1}</div>
                        )}
                        <div>
                          <span class="small">Side</span>{' '}
                          <span class="text-primary">A</span>
                        </div>
                        <div class="margin-left">
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

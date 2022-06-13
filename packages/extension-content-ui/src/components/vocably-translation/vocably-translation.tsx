import {
  Component,
  h,
  Prop,
  Fragment,
  Event,
  EventEmitter,
} from '@stencil/core';
import {
  TranslationCards,
  Result,
  getFullLanguageName,
  languageList,
  Language,
} from '@vocably/model';
import { sortLanguages } from './sortLanguages';
import { isDirectNecessary } from './isDirectNecessary';

@Component({
  tag: 'vocably-translation',
  styleUrl: 'vocably-translation.scss',
  shadow: true,
})
export class VocablyTranslation {
  @Prop() phrase: string;
  @Prop() result: Result<TranslationCards> | null = null;
  @Prop() loading: boolean = false;
  @Prop() existingLanguages: Language[] = [];
  @Prop() language: string = '';
  @Event() changeLanguage: EventEmitter<string>;

  render() {
    const languageSelector = this.result && this.result.success && (
      <select
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
      <div class="loading-container">
        {this.result === null && <vocably-spinner></vocably-spinner>}
        {this.result && this.result.success === false && (
          <div class="error">An error has occurred.</div>
        )}
        {this.result && this.result.success === true && (
          <Fragment>
            <div class="translation">
              {showDirect && (
                <div class="section">
                  <div class="margin-bottom-1">{languageSelector}</div>
                  <div class="margin-left emphasized margin-bottom-2">
                    {this.phrase}
                  </div>

                  <Fragment>
                    <div class="margin-bottom-1">
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

                <div class="cards">
                  {this.result.value.cards.map((card, index, collection) => (
                    <div
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
              <div class="reload">
                <vocably-spinner></vocably-spinner>
              </div>
            )}
          </Fragment>
        )}
      </div>
    );
  }
}

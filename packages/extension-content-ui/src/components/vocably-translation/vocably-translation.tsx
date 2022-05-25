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
  @Event() language: EventEmitter<string>;

  render() {
    const languageSelector = this.result && this.result.success && (
      <select
        disabled={this.loading}
        onChange={(event) =>
          this.language.emit((event.target as HTMLSelectElement).value)
        }
      >
        {Object.entries(languageList)
          .sort(sortLanguages(this.existingLanguages))
          .map(([code, name]) => (
            <option
              selected={
                // @ts-ignore
                this.result.value.translation.sourceLanguage === code
              }
              value={code}
            >
              {name}
            </option>
          ))}
      </select>
    );

    return (
      <div class="loading-container">
        {this.result === null && <vocably-spinner></vocably-spinner>}
        {this.result && this.result.success === false && (
          <div class="error">An error has occurred.</div>
        )}
        {this.result && this.result.success === true && (
          <Fragment>
            <div class="translation">
              {this.result.value.translation.sourceLanguage !==
                this.result.value.translation.targetLanguage && (
                <div class="direct">
                  <div class="header">Direct</div>

                  <div class="label">{languageSelector}</div>
                  <div class="phrase">{this.phrase}</div>

                  <Fragment>
                    <div class="label">
                      {getFullLanguageName(
                        this.result.value.translation.targetLanguage
                      )}
                    </div>
                    <div class="meaning">
                      {this.result.value.translation.target}
                    </div>
                  </Fragment>
                </div>
              )}
              <div class="cards">
                <div class="header">Cards</div>

                {this.result.value.translation.sourceLanguage ===
                  this.result.value.translation.targetLanguage && (
                  <div class="language">{languageSelector}</div>
                )}

                {this.result.value.cards.map((card) => (
                  <div class="card">
                    <div class="label">Side A</div>
                    <div class="value">
                      {card.data.source}
                      {card.data.partOfSpeech && (
                        <Fragment>
                          <span class="invisible-space">&nbsp;</span>
                          <span class="pos">{card.data.partOfSpeech}</span>
                        </Fragment>
                      )}
                    </div>

                    <div class="label">Side B</div>
                    <div class="value">
                      <vocably-side-b item={card}></vocably-side-b>
                    </div>
                  </div>
                ))}
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

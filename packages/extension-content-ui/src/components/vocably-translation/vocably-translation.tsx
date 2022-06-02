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
        {this.result === null && (
          <vocably-spinner class="margin-bottom-1"></vocably-spinner>
        )}
        {this.result && this.result.success === false && (
          <div class="error">An error has occurred.</div>
        )}
        {this.result && this.result.success === true && (
          <Fragment>
            <div class="translation">
              {this.result.value.translation.sourceLanguage !==
                this.result.value.translation.targetLanguage && (
                <div class="section">
                  <div class="header text-primary">Direct</div>

                  <div class="margin-bottom-1">{languageSelector}</div>
                  <div class="margin-left emphasized margin-bottom-1">
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
                <div class="header text-primary">Cards</div>

                {this.result.value.translation.sourceLanguage ===
                  this.result.value.translation.targetLanguage && (
                  <div class="margin-bottom-1">{languageSelector}</div>
                )}

                <div class="cards">
                  {this.result.value.cards.map((card, index) => (
                    <div class="card">
                      <div class="number">{index + 1}</div>
                      <div>
                        <span class="small">Side</span>{' '}
                        <span class="text-primary">A</span>
                      </div>
                      <div class="margin-left">
                        <span class="emphasized">{card.data.source}</span>
                        {card.data.partOfSpeech && (
                          <Fragment>
                            <span class="invisible-space ">&nbsp;</span>
                            <span class="pos">{card.data.partOfSpeech}</span>
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

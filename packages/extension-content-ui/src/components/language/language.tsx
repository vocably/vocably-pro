import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';
import { languageList } from '@vocably/model';

@Component({
  tag: 'vocably-language',
  styleUrl: 'language.scss',
  shadow: true,
})
export class VocablyLanguage {
  @Prop() sourceLanguage: string;
  @Prop() targetLanguage: string;
  @Prop() waiting: boolean;
  @Event() confirm: EventEmitter<{
    sourceLanguage: string;
    targetLanguage: string;
  }>;

  private sourceLanguageSelect: HTMLSelectElement;
  private targetLanguageSelect: HTMLSelectElement;

  render() {
    return (
      <Host data-test="language">
        <div class="container">
          <div class="h1 p">I study</div>
          <div class="p">
            <select
              data-test="source-language-selector"
              ref={(el) =>
                (this.sourceLanguageSelect = el as HTMLSelectElement)
              }
            >
              {Object.entries(languageList).map(([code, name]) => (
                <option selected={this.sourceLanguage === code} value={code}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div class="h1 p">I speak</div>
          <div class="p">
            <select
              data-test="target-language-selector"
              ref={(el) =>
                (this.targetLanguageSelect = el as HTMLSelectElement)
              }
            >
              {Object.entries(languageList).map(([code, name]) => (
                <option selected={this.targetLanguage === code} value={code}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div class="button-container">
            <button
              class="button"
              onClick={() =>
                this.confirm.emit({
                  sourceLanguage: this.sourceLanguageSelect.value,
                  targetLanguage: this.targetLanguageSelect.value,
                })
              }
              data-test="subscribe-button"
              disabled={this.waiting}
            >
              {this.waiting ? 'Saving...' : 'Save'}
            </button>
          </div>
        </div>
      </Host>
    );
  }
}

import { Component, Host, h, EventEmitter, Event, Prop } from '@stencil/core';
import { languageList } from '@vocably/model';

@Component({
  tag: 'vocably-language',
  styleUrl: 'vocably-language.scss',
  shadow: true,
})
export class VocablyLanguage {
  @Prop() language: string;
  @Prop() waiting: boolean;
  @Event() confirm: EventEmitter<string>;

  private select: HTMLSelectElement;

  render() {
    return (
      <Host data-test="language">
        <div class="container">
          <div class="h1">My Mother Tongue Is...</div>
          <div class="p">What language do you speak fluently?</div>
          <div class="p">
            <select
              data-test="language-selector"
              ref={(el) => (this.select = el as HTMLSelectElement)}
            >
              {Object.entries(languageList).map(([code, name]) => (
                <option selected={this.language === code} value={code}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div class="button-container">
            <button
              class="button"
              onClick={() => this.confirm.emit(this.select.value)}
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

import { Component, Host, h, Prop } from '@stencil/core';
import { TranslationCards, Result } from '@vocably/model';

@Component({
  tag: 'vocably-translation',
  styleUrl: 'vocably-translation.scss',
  shadow: true,
})
export class VocablyTranslation {
  @Prop() phrase: string;
  @Prop() result: Result<TranslationCards> | null = null;

  render() {
    return (
      <Host>
        {this.result === null && <vocably-spinner></vocably-spinner>}
        {this.result && this.result.success === false && (
          <div class="error">An error has occurred.</div>
        )}
        {this.result && this.result.success === true && (
          <div class="translation">
            <div class="direct">
              <div class="header">Direct</div>

              <div class="label">Dutch</div>
              <div class="phrase">{this.phrase}</div>

              <div class="label">English</div>
              <div class="meaning">{this.result.value.direct}</div>
            </div>
            <div class="cards">
              <div class="header">Cards</div>

              {this.result.value.cards.map((card) => (
                <div class="card">
                  <div class="label">Side A</div>
                  <div class="value">{card.data.sideA}</div>

                  <div class="label">Side B</div>
                  <div class="value">{card.data.sideB}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Host>
    );
  }
}

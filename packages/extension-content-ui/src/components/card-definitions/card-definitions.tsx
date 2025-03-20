import { Component, h, Prop } from '@stencil/core';
import {
  Card,
  Result,
  TranslationCard,
  TranslationCards,
} from '@vocably/model';
import { explode } from '@vocably/sulna';

@Component({
  tag: 'vocably-card-definitions',
  styleUrl: 'card-definitions.scss',
  shadow: false,
})
export class VocablyCardDefinitions {
  @Prop() card: TranslationCard;
  @Prop() updateCard: (
    data: Partial<Card>
  ) => Promise<Result<TranslationCards>>;

  render() {
    const definitions = explode(this.card.data.definition);

    if (definitions.length === 0) {
      return (
        <vocably-card-translation
          card={this.card}
          updateCard={this.updateCard}
        ></vocably-card-translation>
      );
    }

    return (
      <ul class="vocably-list">
        {this.card.data.translation && (
          <li>
            <vocably-card-translation
              card={this.card}
              updateCard={this.updateCard}
            ></vocably-card-translation>
          </li>
        )}
        {definitions.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    );
  }
}

import { Component, h, Host, Prop } from '@stencil/core';
import { TranslationCard } from '@vocably/model';
import { explode } from '@vocably/sulna';

@Component({
  tag: 'vocably-side-b',
  styleUrl: 'vocably-side-b.scss',
  shadow: true,
})
export class VocablySideB {
  @Prop() item: TranslationCard;

  render() {
    const definitions = explode(this.item.data.definition);

    if (definitions.length === 0) {
      return (
        <Host>
          <span class="translation">{this.item.data.translation}</span>
        </Host>
      );
    }

    return (
      <ul class="list">
        {definitions.map((item) => (
          <li>{item}</li>
        ))}
        {this.item.data.translation && (
          <li>
            <span class="translation">{this.item.data.translation}</span>
          </li>
        )}
      </ul>
    );
  }
}

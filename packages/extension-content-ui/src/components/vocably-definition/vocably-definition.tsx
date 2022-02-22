import { Component, Host, h, Prop } from '@stencil/core';
import { explode } from '@vocably/sulna';

@Component({
  tag: 'vocably-definition',
  styleUrl: 'vocably-definition.scss',
  shadow: true,
})
export class VocablyDefinition {
  @Prop() text: string;
  render() {
    const items = explode(this.text);
    if (items.length === 1) {
      return <Host>{items[0]}</Host>;
    }

    return (
      <ul class="list">
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    );
  }
}

import { Component, h, Prop } from '@stencil/core';
import { explode } from '@vocably/sulna';

@Component({
  tag: 'vocably-card-examples',
  styleUrl: 'vocably-card-examples.scss',
  shadow: false,
})
export class VocablyCardExamples {
  @Prop() example: string;
  render() {
    const examples = explode(this.example);

    return (
      <div>
        {examples.length === 1 && examples[0]}
        {examples.length > 1 && (
          <ul class="vocably-list">
            {examples.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

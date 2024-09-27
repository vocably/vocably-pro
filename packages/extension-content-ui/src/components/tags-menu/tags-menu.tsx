import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';
import { Result, TagItem } from '@vocably/model';

@Component({
  tag: 'vocably-tags-menu',
  styleUrl: 'tags-menu.scss',
  shadow: true,
})
export class VocablyTagsMenu {
  @Event() addClick: EventEmitter<void>;
  @Event() editClick: EventEmitter<TagItem>;
  @Event() tagClick: EventEmitter<TagItem>;

  @Prop() selectedItems: string[] = [];
  @Prop() existingItems: TagItem[] = [];
  @Prop() saveTag: (tag: Pick<TagItem, 'data'>) => Promise<Result<TagItem>>;
  @Prop() deleteTag: (tag: TagItem) => Promise<Result<unknown>>;

  render() {
    return (
      <Host>
        <menu>
          <li>
            <button onClick={() => this.addClick.emit()}>Add new item</button>
          </li>
          {this.existingItems.map((item) => (
            <li>
              <button onClick={() => this.tagClick.emit(item)}>
                {item.data.title}{' '}
                <vocably-icon-check
                  class={{
                    check: true,
                    visible: this.selectedItems.includes(item.id),
                  }}
                ></vocably-icon-check>
              </button>
              <button class="edit" onClick={() => this.editClick.emit(item)}>
                <vocably-icon-tag-edit></vocably-icon-tag-edit>
              </button>
            </li>
          ))}
        </menu>
      </Host>
    );
  }
}

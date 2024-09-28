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
          {this.existingItems.length === 0 && (
            <li class="info">
              Tags are like groups, or folders, but better.
              <br />
              Press "Add new tag" to begin.
            </li>
          )}
          <li class="clickable">
            <button onClick={() => this.addClick.emit()}>Add new tag</button>
          </li>
          {this.existingItems.map((item) => (
            <li class="clickable">
              <button
                onClick={() => this.tagClick.emit(item)}
                style={{ flex: '1' }}
              >
                {item.data.title}{' '}
                <vocably-icon-check
                  class={{
                    check: true,
                    visible: this.selectedItems.includes(item.id),
                  }}
                ></vocably-icon-check>
              </button>
              <button
                title={'Edit Tag'}
                class="edit"
                style={{ flex: '0', textAlign: 'center' }}
                onClick={() => this.editClick.emit(item)}
              >
                <vocably-icon-tag-edit></vocably-icon-tag-edit>
              </button>
            </li>
          ))}
        </menu>
      </Host>
    );
  }
}

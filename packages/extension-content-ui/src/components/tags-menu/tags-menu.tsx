import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';
import { Result, TagItem } from '@vocably/model';

@Component({
  tag: 'vocably-tags-menu',
  styleUrl: 'tags-menu.scss',
  shadow: true,
})
export class VocablyTagsMenu {
  @Event() tagClick: EventEmitter<TagItem>;

  @Prop() selectedItems: string[] = [];
  @Prop() existingItems: TagItem[] = [];
  @Prop() saveTag: (tag: Pick<TagItem, 'data'>) => Promise<Result<TagItem>>;
  @Prop() deleteTag: (tag: TagItem) => Promise<Result<unknown>>;

  private overlayElement: HTMLVocablyOverlayElement | null = null;
  private tagForm: HTMLVocablyTagFormElement | null = null;

  hideTagForm() {
    const overlay = this.overlayElement;
    overlay && overlay.hide();
  }

  displayTagForm(item?: TagItem) {
    this.overlayElement && this.overlayElement.remove();
    this.tagForm && this.tagForm.remove();

    const overlay = document.createElement('vocably-overlay');
    overlay.style.setProperty('--opacity', '0.3');

    const tagForm = document.createElement('vocably-tag-form');
    tagForm.style.position = 'fixed';
    tagForm.style.left = '50vw';
    tagForm.style.top = '50vh';
    tagForm.style.transform = 'translate(-50%, -50%)';

    if (item) {
      tagForm.tagItem = item;
    }

    tagForm.saveTag = this.saveTag;
    tagForm.deleteTag = this.deleteTag;

    tagForm.addEventListener('hide', () => {
      this.hideTagForm();
    });

    overlay.appendChild(tagForm);
    document.body.appendChild(overlay);

    this.overlayElement = overlay;
    this.tagForm = tagForm;
  }
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
            <button onClick={() => this.displayTagForm()}>Add new tag</button>
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
                onClick={() => this.displayTagForm(item)}
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

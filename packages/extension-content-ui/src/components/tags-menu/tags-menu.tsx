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

  private tagFormBackdrop: HTMLElement | null = null;
  private tagForm: HTMLVocablyTagFormElement | null = null;

  hideTagForm() {
    const tagForm = this.tagForm;
    const backdrop = this.tagFormBackdrop;

    tagForm && (tagForm.style.opacity = '0');
    backdrop && (backdrop.style.opacity = '0');

    setTimeout(() => {
      tagForm && tagForm.remove();
      backdrop && backdrop.remove();
    }, 200);
  }

  displayTagForm(item?: TagItem) {
    this.tagFormBackdrop && this.tagFormBackdrop.remove();
    this.tagForm && this.tagForm.remove();

    const backdrop = document.createElement('div');
    backdrop.style.position = 'fixed';
    backdrop.style.left = '0px';
    backdrop.style.top = '0px';
    backdrop.style.width = '100vw';
    backdrop.style.height = '100vh';
    backdrop.style.background = 'rgb(0, 0, 0)';
    backdrop.style.transition = 'opacity 0.2s ease-in-out';
    backdrop.style.opacity = '0';

    backdrop.addEventListener('click', () => {
      this.hideTagForm();
    });

    this.tagFormBackdrop = backdrop;
    document.body.appendChild(backdrop);

    const tagForm = document.createElement('vocably-tag-form');
    tagForm.style.position = 'fixed';
    tagForm.style.left = '50vw';
    tagForm.style.top = '50vh';
    tagForm.style.transform = 'translate(-50%, -50%)';
    tagForm.style.transition = 'opacity 0.2s ease-in-out';
    tagForm.style.opacity = '0';

    if (item) {
      tagForm.tagItem = item;
    }

    tagForm.addEventListener('cancelClick', () => {
      this.hideTagForm();
    });

    this.tagForm = tagForm;
    document.body.appendChild(tagForm);

    setTimeout(() => {
      backdrop.style.opacity = '0.2';
      tagForm.style.opacity = '1';
    }, 0);
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

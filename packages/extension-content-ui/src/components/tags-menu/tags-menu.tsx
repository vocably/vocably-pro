import { Component, h, Host, Prop, State } from '@stencil/core';
import { Result, TagCandidate, TagItem } from '@vocably/model';

@Component({
  tag: 'vocably-tags-menu',
  styleUrl: 'tags-menu.scss',
  shadow: true,
})
export class VocablyTagsMenu {
  @Prop() disabled = false;
  @Prop() selectedItems: string[] = [];
  @Prop() existingItems: TagItem[] = [];
  @Prop() attachTag: (tag: TagItem) => Promise<Result<unknown>>;
  @Prop() detachTag: (tag: TagItem) => Promise<Result<unknown>>;
  @Prop() saveTag: (tag: TagCandidate) => Promise<Result<unknown>>;
  @Prop() deleteTag: (tag: TagItem) => Promise<Result<unknown>>;

  @State() savingTag: TagItem | null = null;

  private overlayElement: HTMLVocablyOverlayElement | null = null;
  private tagForm: HTMLVocablyTagFormElement | null = null;

  hideTagForm() {
    const overlay = this.overlayElement;
    overlay && overlay.hide();
  }

  private onTagClick = (tagItem: TagItem) => async () => {
    if (this.disabled) {
      return;
    }

    this.disabled = true;
    this.savingTag = tagItem;

    const result = await (this.selectedItems.includes(tagItem.id)
      ? this.detachTag(tagItem)
      : this.attachTag(tagItem));

    this.disabled = false;
    this.savingTag = null;

    if (result.success === false) {
      alert('Unable to complete the tag operation. Please try again.');
      return;
    }
  };

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
            <button
              onClick={() => {
                if (this.disabled) {
                  return false;
                }

                this.displayTagForm();
              }}
            >
              Add new tag
            </button>
          </li>
          {this.existingItems
            .sort((a, b) => b.created - a.created)
            .map((tagItem) => (
              <li class="clickable">
                <button
                  onClick={this.onTagClick(tagItem)}
                  style={{ flex: '1' }}
                >
                  {tagItem.data.title}{' '}
                  <span class="icon">
                    {this.savingTag !== tagItem &&
                      this.selectedItems.includes(tagItem.id) && (
                        <vocably-icon-check class="check"></vocably-icon-check>
                      )}
                    {this.savingTag === tagItem && (
                      <vocably-icon-spin class="spinner"></vocably-icon-spin>
                    )}
                  </span>
                </button>
                <button
                  title={'Edit Tag'}
                  class="edit"
                  style={{ flex: '0', textAlign: 'center' }}
                  onClick={() => {
                    if (this.disabled) {
                      return false;
                    }

                    this.displayTagForm(tagItem);
                  }}
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

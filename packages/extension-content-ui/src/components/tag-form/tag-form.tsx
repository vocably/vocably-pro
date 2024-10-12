import { Component, Event, EventEmitter, h, Prop, State } from '@stencil/core';
import { Result, TagCandidate, TagItem } from '@vocably/model';

@Component({
  tag: 'vocably-tag-form',
  styleUrl: 'tag-form.scss',
  shadow: true,
})
export class VocablyTagsMenu {
  @Event() hide: EventEmitter<void>;

  @Prop() tagItem: TagItem | null = null;
  @Prop() saveTag?: (tag: TagCandidate) => Promise<Result<unknown>>;
  @Prop() deleteTag?: (tag: TagItem) => Promise<Result<unknown>>;

  @State() title: string = '';
  @State() saving = false;

  textInput!: HTMLInputElement;

  componentDidLoad() {
    const initialTitle = this.tagItem ? this.tagItem.data.title : '';
    this.title = initialTitle;
    this.textInput.value = initialTitle;
    this.textInput.focus();
  }

  isDisabled() {
    return this.saving || this.title.trim().length === 0;
  }

  async onSubmit() {
    if (this.isDisabled()) {
      return;
    }

    if (!this.saveTag) {
      this.hide.emit();
      return;
    }

    this.saving = true;

    const result = await this.saveTag({
      ...this.tagItem,
      data: {
        ...this.tagItem?.data,
        title: this.title.trim(),
      },
    });

    if (result.success === false) {
      alert(
        [
          'An error occurred during the attempt to save the tag.',
          'Please try again later.',
        ].join('\n')
      );

      this.saving = false;
      return;
    }

    this.hide.emit();
  }

  async onDelete() {
    if (this.isDisabled()) {
      return;
    }

    if (!this.deleteTag || !this.tagItem) {
      this.hide.emit();
      return;
    }

    this.saving = true;

    const result = await this.deleteTag(this.tagItem);

    if (result.success === false) {
      alert(
        [
          'An error occurred during the attempt to delete the tag.',
          'Please try again later.',
        ].join('\n')
      );

      this.saving = false;
      return;
    }

    this.hide.emit();
  }

  onInputChange() {
    this.title = this.textInput.value;
  }

  render() {
    return (
      <div class="tag-form">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.onSubmit();
            return false;
          }}
        >
          <label>
            <h1>
              {this.tagItem
                ? `New name for ${this.tagItem.data.title}:`
                : `New tag name:`}
            </h1>
            <input
              type="text"
              placeholder="New tag"
              onKeyUp={this.onInputChange.bind(this)}
              onChange={this.onInputChange.bind(this)}
              ref={(el) => (this.textInput = el as HTMLInputElement)}
            />
          </label>
          <div class="buttons">
            {this.tagItem && (
              <button
                class="delete"
                disabled={this.isDisabled()}
                type="button"
                onClick={() => {
                  const yesPlease = window.confirm(
                    ['Delete this tag?', 'No cards will be deleted.'].join('\n')
                  );

                  if (yesPlease) {
                    this.onDelete();
                  }
                }}
              >
                Delete
              </button>
            )}
            <button
              type="button"
              class="cancel"
              onClick={() => this.hide.emit()}
            >
              Cancel
            </button>
            <button type="submit" class="submit" disabled={this.isDisabled()}>
              Save
            </button>
          </div>
          {this.saving && (
            <div class="loader">
              <vocably-spinner></vocably-spinner>
            </div>
          )}
        </form>
      </div>
    );
  }
}

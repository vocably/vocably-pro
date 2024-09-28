import { Component, Event, EventEmitter, h, Prop, State } from '@stencil/core';
import { TagItem } from '@vocably/model';

@Component({
  tag: 'vocably-tag-form',
  styleUrl: 'tag-form.scss',
  shadow: true,
})
export class VocablyTagsMenu {
  @Event() saveClick: EventEmitter<TagItem['data']>;
  @Event() cancelClick: EventEmitter<void>;
  @Event() deleteClick: EventEmitter<void>;

  @Prop() tagItem: TagItem | null = null;

  @State() title: string = '';

  textInput!: HTMLInputElement;

  componentDidLoad() {
    const initialTitle = this.tagItem ? this.tagItem.data.title : '';
    this.title = initialTitle;
    this.textInput.value = initialTitle;
    this.textInput.focus();
  }

  isDisabled() {
    return this.title.trim().length === 0;
  }

  onSubmit() {
    this.saveClick.emit({
      title: this.textInput.value.trim(),
    });
  }

  onInputChange() {
    this.title = this.textInput.value;
  }

  render() {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          this.onSubmit();
          return false;
        }}
      >
        <h1>
          {this.tagItem ? `Edit ${this.tagItem.data.title}` : `Add New Tag`}
        </h1>
        <label>
          <input
            type="text"
            onKeyUp={this.onInputChange.bind(this)}
            onChange={this.onInputChange.bind(this)}
            ref={(el) => (this.textInput = el as HTMLInputElement)}
          />
        </label>
        <div class="buttons">
          {this.tagItem && (
            <button
              class="delete"
              onClick={() => {
                const yesPlease = window.confirm(
                  [
                    'Delete this tag?',
                    'Cards associated with the tag will not be deleted.',
                  ].join('\n')
                );

                if (yesPlease) {
                  this.deleteClick.emit();
                }
              }}
            >
              Delete
            </button>
          )}
          <button
            type="button"
            class="cancel"
            onClick={() => this.cancelClick.emit()}
          >
            Cancel
          </button>
          <button type="submit" class="submit" disabled={this.isDisabled()}>
            Save
          </button>
        </div>
      </form>
    );
  }
}

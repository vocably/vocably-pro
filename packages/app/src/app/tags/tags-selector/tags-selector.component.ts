import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewTag, TagItem } from '@vocably/model';
import { TagFormComponent, TagFormData } from '../tag-form/tag-form.component';

@Component({
  selector: 'app-tags-selector',
  templateUrl: './tags-selector.component.html',
  styleUrls: ['./tags-selector.component.scss'],
})
export class TagsSelectorComponent implements OnInit {
  @Input() tags: TagItem[] = [];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  showTagForm(tag: TagItem | NewTag | null = null) {
    const dialog = this.dialog.open<TagFormComponent, TagFormData>(
      TagFormComponent,
      {
        data: {
          tag,
        },
      }
    );
  }
}

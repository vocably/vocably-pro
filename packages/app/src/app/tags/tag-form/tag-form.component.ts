import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewTag, TagItem } from '@vocably/model';

export type TagFormData = {
  tag: TagItem | NewTag | null;
};

@Component({
  selector: 'app-tag-form',
  templateUrl: './tag-form.component.html',
  styleUrls: ['./tag-form.component.scss'],
})
export class TagFormComponent implements OnInit {
  public title = '';

  constructor(
    public dialogRef: MatDialogRef<TagFormComponent, TagFormData>,
    @Inject(MAT_DIALOG_DATA) public data: TagFormData
  ) {
    if (data.tag) {
      this.title = data.tag.data.title;
    }
  }

  ngOnInit(): void {}
}

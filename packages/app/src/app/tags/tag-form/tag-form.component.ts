import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { isTagItem, NewTag, TagItem } from '@vocably/model';
import { Subject, takeUntil } from 'rxjs';
import {
  DeleteConfirmationComponent,
  DeleteConfirmationData,
} from '../delete-confirmation/delete-confirmation.component';

export type TagFormData = {
  tag: TagItem | NewTag | null;
};

export type TagFormActionDelete = {
  name: 'delete';
};

export type TagFormActionSave = {
  name: 'save';
  title: string;
};

export type TagFormAction = TagFormActionDelete | TagFormActionSave;

@Component({
  selector: 'app-tag-form',
  templateUrl: './tag-form.component.html',
  styleUrls: ['./tag-form.component.scss'],
})
export class TagFormComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();

  public title = '';

  constructor(
    public dialogRef: MatDialogRef<TagFormComponent, TagFormAction>,
    @Inject(MAT_DIALOG_DATA) public data: TagFormData,
    public dialog: MatDialog
  ) {
    if (data.tag) {
      this.title = data.tag.data.title;
    }
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.destroy$.next(null);
  }

  onDeleteClick() {
    if (!isTagItem(this.data.tag)) {
      this.dialogRef.close({
        name: 'delete',
      });

      return;
    }
    const ref = this.dialog.open<
      DeleteConfirmationComponent,
      DeleteConfirmationData,
      undefined | true
    >(DeleteConfirmationComponent, {
      data: {
        tag: this.data.tag,
      },
    });

    ref
      .afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        if (!result) {
          return;
        }

        this.dialogRef.close({
          name: 'delete',
        });
      });
  }
}

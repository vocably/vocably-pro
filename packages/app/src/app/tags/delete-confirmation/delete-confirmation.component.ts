import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TagItem } from '@vocably/model';

export type DeleteConfirmationData = {
  tag: TagItem;
};

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.scss'],
})
export class DeleteConfirmationComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<
      DeleteConfirmationComponent,
      undefined | true
    >,
    @Inject(MAT_DIALOG_DATA) public data: DeleteConfirmationData
  ) {}

  ngOnInit(): void {}
}

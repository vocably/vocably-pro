import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {
  LoaderComponent,
  LoaderComponentOptions,
} from './loader/loader.component';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  constructor(private dialog: MatDialog) {}

  public show(options: LoaderComponentOptions = {}): MatDialogRef<any> {
    return this.dialog.open(LoaderComponent, {
      closeOnNavigation: false,
      disableClose: true,
      data: options,
    });
  }
}

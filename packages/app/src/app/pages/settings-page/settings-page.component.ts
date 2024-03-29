import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Auth } from '@aws-amplify/auth';
import { LoaderService } from '../../components/loader.service';
import { DeleteAccountConfirmationComponent } from './delete-account-confirmation/delete-account-confirmation.component';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss'],
})
export class SettingsPageComponent implements OnInit {
  constructor(
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    public loader: LoaderService
  ) {}

  ngOnInit(): void {}

  notifyOnSave() {
    this.snackBar.open('The setting has been updated.', undefined, {
      duration: 1000,
    });
  }

  deleteAccount() {
    const dialogRef = this.dialog.open(DeleteAccountConfirmationComponent);

    dialogRef.afterClosed().subscribe(async (result) => {
      if (result !== true) {
        return;
      }

      const loaderRef = this.loader.show({
        message: 'Deleting account...',
      });
      await Auth.deleteUser();
      loaderRef.close();
    });
  }
}

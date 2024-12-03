import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../components/components.module';
import { HeaderModule } from '../header/header.module';
import { LanguageModule } from '../language/language.module';
import { SrsModule } from '../srs/srs.module';
import { CardComponent } from './card/card.component';
import { DeckSelectorComponent } from './deck-selector/deck-selector.component';
import { DecksRoutingModule } from './decks-routing.module';
import { DecksComponent } from './decks.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { CardFormComponent } from './pages/edit-page/card-form/card-form.component';
import { DeleteConfirmationDialogComponent } from './pages/edit-page/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { EditCardComponent } from './pages/edit-page/edit-card/edit-card.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { ExportPageComponent } from './pages/export-page/export-page.component';
import { NoDecksPageComponent } from './pages/no-decks-page/no-decks-page.component';
import { StudyPageComponent } from './pages/study-page/study-page.component';
import { SelectedDeckComponent } from './selected-deck/selected-deck.component';

@NgModule({
  declarations: [
    DecksComponent,
    DashboardPageComponent,
    NoDecksPageComponent,
    SelectedDeckComponent,
    DeckSelectorComponent,
    StudyPageComponent,
    EditPageComponent,
    ExportPageComponent,
    EditCardComponent,
    CardFormComponent,
    DeleteConfirmationDialogComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    DecksRoutingModule,
    LanguageModule,
    SrsModule,
    ComponentsModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatRadioModule,
    MatInputModule,
  ],
  exports: [],
})
export class DecksModule {}

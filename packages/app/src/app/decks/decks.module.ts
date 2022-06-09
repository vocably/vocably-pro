import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from '../header/header.module';
import { DecksRoutingModule } from './decks-routing.module';
import { DecksComponent } from './decks.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { NoDecksPageComponent } from './pages/no-decks-page/no-decks-page.component';
import { SelectedDeckComponent } from './selected-deck/selected-deck.component';
import { LanguageModule } from '../language/language.module';
import { DeckSelectorComponent } from './deck-selector/deck-selector.component';
import { StudyPageComponent } from './pages/study-page/study-page.component';
import { SrsModule } from '../srs/srs.module';
import { ComponentsModule } from '../components/components.module';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { EditCardComponent } from './pages/edit-page/edit-card/edit-card.component';
import { CardFormComponent } from './pages/edit-page/card-form/card-form.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteConfirmationDialogComponent } from './pages/edit-page/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    DecksComponent,
    DashboardPageComponent,
    NoDecksPageComponent,
    SelectedDeckComponent,
    DeckSelectorComponent,
    StudyPageComponent,
    EditPageComponent,
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
  ],
  exports: [],
})
export class DecksModule {}

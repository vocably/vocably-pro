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

@NgModule({
  declarations: [
    DecksComponent,
    DashboardPageComponent,
    NoDecksPageComponent,
    SelectedDeckComponent,
    DeckSelectorComponent,
    StudyPageComponent,
    EditPageComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    HeaderModule,
    DecksRoutingModule,
    LanguageModule,
    SrsModule,
    ComponentsModule,
  ],
  exports: [],
})
export class DecksModule {}

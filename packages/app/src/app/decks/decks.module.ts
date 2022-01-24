import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from '../header/header.module';
import { DecksRoutingModule } from './decks-routing.module';
import { DecksComponent } from './decks.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

@NgModule({
  declarations: [DecksComponent, DashboardPageComponent],
  imports: [CommonModule, IonicModule, HeaderModule, DecksRoutingModule],
  exports: [],
})
export class DecksModule {}

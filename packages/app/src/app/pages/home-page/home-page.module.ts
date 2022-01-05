import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { NoCardsComponent } from './no-cards/no-cards.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HomePageComponent, NoCardsComponent],
  imports: [CommonModule, HttpClientModule],
})
export class HomePageModule {}

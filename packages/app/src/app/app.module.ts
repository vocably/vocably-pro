import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NoCardsComponent } from './pages/home-page/no-cards/no-cards.component';
import { CardsComponent } from './pages/home-page/cards/cards.component';
import { LanguagesComponent } from './pages/home-page/languages/languages.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NoCardsComponent,
    CardsComponent,
    LanguagesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, AuthModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

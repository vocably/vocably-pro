import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { defineCustomElements } from '@vocably/extension-content-ui/loader';

defineCustomElements();

import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { SearchFormComponent } from './search-form/search-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SettingsPageComponent,
    SearchFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule,
    IonicModule.forRoot({
      mode: 'md',
      statusTap: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ExtensionUiLibraryModule } from '@vocably/extension-angular-components';
import { defineCustomElements } from '@vocably/extension-content-ui/loader';

defineCustomElements();

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, ExtensionUiLibraryModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

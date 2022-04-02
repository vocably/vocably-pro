import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ExtensionUiLibraryModule } from '@vocably/extension-angular-components';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ExtensionUiLibraryModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

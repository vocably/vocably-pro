import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { ComponentsModule } from '../components/components.module';
import { LanguageModule } from '../language/language.module';
import { LanguageButtonComponent } from './language-button/language-button.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { SecondPageComponent } from './pages/second-page/second-page.component';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';

@NgModule({
  declarations: [
    WelcomeComponent,
    IndexPageComponent,
    SecondPageComponent,
    LanguageButtonComponent,
  ],
  imports: [
    CommonModule,
    LanguageModule,
    ComponentsModule,
    MatIconModule,
    MatRippleModule,
    WelcomeRoutingModule,
  ],
})
export class WelcomeModule {}

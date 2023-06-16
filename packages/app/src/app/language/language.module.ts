import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LanguagePipe } from './language.pipe';

@NgModule({
  declarations: [LanguagePipe],
  imports: [CommonModule],
  exports: [LanguagePipe],
})
export class LanguageModule {}

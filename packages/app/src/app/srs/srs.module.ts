import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CardComponent } from './card/card.component';
import { CardOptionsComponent } from './card-options/card-options.component';
import { SuccessComponent } from './success/success.component';
import { ListComponent } from './list/list.component';
import { TextLengthDirective } from './text-length.directive';
import { DefinitionComponent } from './definition/definition.component';

@NgModule({
  declarations: [
    CardComponent,
    CardOptionsComponent,
    SuccessComponent,
    ListComponent,
    TextLengthDirective,
    DefinitionComponent,
  ],
  imports: [CommonModule, IonicModule],
  exports: [ListComponent, DefinitionComponent],
})
export class SrsModule {}

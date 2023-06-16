import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../components/components.module';
import { CardOptionsComponent } from './card-options/card-options.component';
import { CardComponent } from './card/card.component';
import { ListComponent } from './list/list.component';
import { SideBComponent } from './side-b/side-b.component';
import { SuccessComponent } from './success/success.component';
import { TextLengthDirective } from './text-length.directive';

@NgModule({
  declarations: [
    CardComponent,
    CardOptionsComponent,
    SuccessComponent,
    ListComponent,
    TextLengthDirective,
    SideBComponent,
  ],
  imports: [CommonModule, IonicModule, ComponentsModule, MatIconModule],
  exports: [ListComponent, SideBComponent],
})
export class SrsModule {}

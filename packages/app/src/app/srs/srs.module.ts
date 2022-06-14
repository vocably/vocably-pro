import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CardComponent } from './card/card.component';
import { CardOptionsComponent } from './card-options/card-options.component';
import { SuccessComponent } from './success/success.component';
import { ListComponent } from './list/list.component';
import { TextLengthDirective } from './text-length.directive';
import { SideBComponent } from './side-b/side-b.component';
import { ComponentsModule } from '../components/components.module';
import { MatIconModule } from '@angular/material/icon';

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

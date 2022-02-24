import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { OverlayModule } from '@angular/cdk/overlay';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipTriggerForDirective } from './tooltip/tooltip-trigger-for.directive';
import { BackButtonComponent } from './back-button/back-button.component';

@NgModule({
  declarations: [
    TooltipComponent,
    TooltipTriggerForDirective,
    BackButtonComponent,
  ],
  imports: [CommonModule, IonicModule, RouterModule, OverlayModule],
  exports: [
    TooltipComponent,
    TooltipComponent,
    TooltipTriggerForDirective,
    BackButtonComponent,
  ],
})
export class ComponentsModule {}

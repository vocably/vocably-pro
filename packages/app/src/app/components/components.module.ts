import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { OverlayModule } from '@angular/cdk/overlay';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipTriggerForDirective } from './tooltip/tooltip-trigger-for.directive';
import { BackButtonComponent } from './back-button/back-button.component';
import { SubscriptionStatusPipe } from './subscription-status.pipe';
import { OfflineComponent } from './offline/offline.component';
import { GoogleIconComponent } from './google-icon/google-icon.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './loader/loader.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LanguageInputComponent } from './language-input/language-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    TooltipComponent,
    TooltipTriggerForDirective,
    BackButtonComponent,
    SubscriptionStatusPipe,
    OfflineComponent,
    GoogleIconComponent,
    LoaderComponent,
    LanguageInputComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule,
    OverlayModule,
    MatIconModule,
    HttpClientModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    TooltipComponent,
    TooltipComponent,
    TooltipTriggerForDirective,
    BackButtonComponent,
    SubscriptionStatusPipe,
    OfflineComponent,
    GoogleIconComponent,
    LanguageInputComponent,
  ],
})
export class ComponentsModule {}

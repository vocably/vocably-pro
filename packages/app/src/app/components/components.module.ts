import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LanguageModule } from '../language/language.module';
import { BackButtonComponent } from './back-button/back-button.component';
import { GoogleIconComponent } from './google-icon/google-icon.component';
import { LanguageIconComponent } from './language-icon/language-icon.component';
import { LanguageInputComponent } from './language-input/language-input.component';
import { LoaderComponent } from './loader/loader.component';
import { LanguageButtonComponent } from './onboarding-form/language/button/language-button.component';
import { LanguageComponent } from './onboarding-form/language/language.component';
import { OnboardingFormComponent } from './onboarding-form/onboarding-form.component';
import { SubscriptionStatusPipe } from './subscription-status.pipe';
import { TooltipTriggerForDirective } from './tooltip/tooltip-trigger-for.directive';
import { TooltipComponent } from './tooltip/tooltip.component';

@NgModule({
  declarations: [
    TooltipComponent,
    TooltipTriggerForDirective,
    BackButtonComponent,
    SubscriptionStatusPipe,
    GoogleIconComponent,
    LoaderComponent,
    LanguageInputComponent,
    OnboardingFormComponent,
    LanguageComponent,
    LanguageIconComponent,
    LanguageButtonComponent,
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
    MatStepperModule,
    MatRadioModule,
    LanguageModule,
    MatRippleModule,
  ],
  exports: [
    TooltipComponent,
    TooltipComponent,
    TooltipTriggerForDirective,
    BackButtonComponent,
    SubscriptionStatusPipe,
    GoogleIconComponent,
    LanguageInputComponent,
    OnboardingFormComponent,
    LanguageIconComponent,
  ],
})
export class ComponentsModule {}

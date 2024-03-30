import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { GoogleLanguage } from '@vocably/model';
import { sortedTargetLanguages } from '../../sorted-languages';

@Component({
  selector: 'app-onboarding-form',
  templateUrl: './onboarding-form.component.html',
  styleUrls: ['./onboarding-form.component.scss'],
})
export class OnboardingFormComponent implements OnInit {
  @Output() selected = new EventEmitter<[GoogleLanguage, GoogleLanguage]>();

  targetLanguages = sortedTargetLanguages;

  languageGroup = this._formBuilder.group({
    targetLanguage: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}

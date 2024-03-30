import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GoogleLanguage } from '@vocably/model';

@Component({
  selector: 'app-onboarding-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss'],
})
export class LanguageComponent implements OnInit {
  @Input() formGroup!: FormGroup;
  @Input() errorMessage!: string;
  @Input() languages!: GoogleLanguage[];
  @Input() showTop = 6;
  @Output() selected = new EventEmitter();

  isSubmitted = false;

  expanded = false;

  constructor() {}

  onSubmit() {
    this.isSubmitted = true;

    if (this.formGroup.valid) {
      this.selected.next(null);
      this.isSubmitted = false;
    }
  }

  onClick(value: string) {
    this.formGroup.controls[this.controlName].setValue(value);
    this.onSubmit();
  }

  get controlName(): string {
    return Object.keys(this.formGroup.controls)[0];
  }

  get controlValue(): string {
    return this.formGroup.controls[this.controlName].value;
  }

  ngOnInit(): void {}
}

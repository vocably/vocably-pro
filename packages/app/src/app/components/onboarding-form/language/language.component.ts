import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-onboarding-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss'],
})
export class LanguageComponent implements OnInit {
  @Input() formGroup!: FormGroup;
  @Input() errorMessage!: string;
  @Input() languages!: string[];
  @Output() selected = new EventEmitter();

  isSubmitted = false;

  constructor() {}

  onSubmit() {
    this.isSubmitted = true;

    if (this.formGroup.valid) {
      this.selected.next(null);
      this.isSubmitted = false;
    }
  }

  get controlName(): string {
    return Object.keys(this.formGroup.controls)[0];
  }

  ngOnInit(): void {}
}

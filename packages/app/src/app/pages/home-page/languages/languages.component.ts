import { Component, Input, OnInit } from '@angular/core';
import { AvailableLanguage } from '@vocably/model';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss'],
})
export class LanguagesComponent implements OnInit {
  @Input() languages: AvailableLanguage[] = [];
  @Input() selected: AvailableLanguage | null = null;

  constructor() {}

  ngOnInit(): void {}
}

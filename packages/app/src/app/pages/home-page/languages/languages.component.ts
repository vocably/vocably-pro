import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss'],
})
export class LanguagesComponent implements OnInit {
  @Input() languages: string[] = [];
  @Input() selected: string | null = null;

  constructor() {}

  ngOnInit(): void {}
}

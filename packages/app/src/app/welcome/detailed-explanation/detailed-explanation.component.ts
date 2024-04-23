import { Component, Input, OnInit } from '@angular/core';
import { GoogleLanguage } from '@vocably/model';
import { isIOS } from '../../../browser';

@Component({
  selector: 'app-detailed-explanation',
  templateUrl: './detailed-explanation.component.html',
  styleUrls: ['./detailed-explanation.component.scss'],
})
export class DetailedExplanationComponent implements OnInit {
  @Input() public language!: GoogleLanguage;

  public isMobilePlatform = isIOS();

  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import * as Bowser from 'bowser';

@Component({
  selector: 'app-android-page',
  templateUrl: './android-page.component.html',
  styleUrls: ['./android-page.component.scss'],
})
export class AndroidPageComponent implements OnInit {
  public isAndroidChrome = Bowser.getParser(
    window.navigator.userAgent
  ).satisfies({
    android: {
      chrome: '>1',
    },
  });

  constructor() {}

  ngOnInit(): void {}
}

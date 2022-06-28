import { Component, OnInit } from '@angular/core';
import * as Bowser from 'bowser';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-ios-page',
  templateUrl: './ios-page.component.html',
  styleUrls: ['./ios-page.component.scss'],
})
export class IosPageComponent implements OnInit {
  public isIosSafari = Bowser.getParser(window.navigator.userAgent).satisfies({
    mobile: {
      safari: '>1',
    },
    tablet: {
      safari: '>1',
    },
  });

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'ios-share',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/ios-share.svg')
    );

    this.matIconRegistry.addSvgIcon(
      'ios-add',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/ios-add.svg')
    );
  }

  ngOnInit(): void {}
}

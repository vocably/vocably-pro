import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { isIosSafari } from '../../isIosSafari';

@Component({
  selector: 'app-ios-page',
  templateUrl: './ios-page.component.html',
  styleUrls: ['./ios-page.component.scss'],
})
export class IosPageComponent implements OnInit {
  public isIosSafari = isIosSafari;

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

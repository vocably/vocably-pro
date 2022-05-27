import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

const googleLogoURL = 'assets/google.svg';

@Component({
  selector: 'button[app-sign-in-button]',
  templateUrl: './sign-in-button.component.html',
  styleUrls: ['./sign-in-button.component.scss'],
})
export class SignInButtonComponent implements OnInit {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'logo',
      this.domSanitizer.bypassSecurityTrustResourceUrl(googleLogoURL)
    );
  }

  ngOnInit(): void {}
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { LogoComponent } from './logo/logo.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, LogoComponent],
  imports: [CommonModule, IonicModule, RouterModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}

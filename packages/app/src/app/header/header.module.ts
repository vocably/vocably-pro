import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../components/components.module';
import { HeaderComponent } from './header.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  declarations: [HeaderComponent, LogoComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    ComponentsModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
  ],
  exports: [HeaderComponent, LogoComponent],
})
export class HeaderModule {}

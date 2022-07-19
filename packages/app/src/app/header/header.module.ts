import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { LogoComponent } from './logo/logo.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

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
  exports: [HeaderComponent],
})
export class HeaderModule {}

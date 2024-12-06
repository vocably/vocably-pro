import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { TagFormComponent } from './tag-form/tag-form.component';
import { TagsSelectorComponent } from './tags-selector/tags-selector.component';

@NgModule({
  declarations: [TagsSelectorComponent, TagFormComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatDialogModule,
    FormsModule,
  ],
  exports: [TagsSelectorComponent],
})
export class TagsModule {}

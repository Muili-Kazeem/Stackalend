import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NotFoundComponent } from './ui/not-found/not-found.component';
import { PreviewTagPipe } from './pipes/preview-tag.pipe';


@NgModule({
  declarations: [
    NotFoundComponent,
    PreviewTagPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    PreviewTagPipe,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }

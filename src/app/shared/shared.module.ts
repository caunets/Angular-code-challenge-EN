import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PictureComponent } from './components/picture.component';

@NgModule({
  declarations: [
    PictureComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PictureComponent
  ]
})
export class SharedModule { }

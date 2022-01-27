import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YlHeadingComponent } from './heading.component';

@NgModule({
  declarations: [
    YlHeadingComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    YlHeadingComponent
  ]
})
export class YlHeadingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YlSliderComponent } from './slider.component';

@NgModule({
  declarations: [
    YlSliderComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    YlSliderComponent
  ]
})
export class YlSliderModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YlVehicleBoxComponent } from './vehicle-box.component';

@NgModule({
  declarations: [
    YlVehicleBoxComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    YlVehicleBoxComponent
  ]
})
export class YlVehicleBoxModule { }

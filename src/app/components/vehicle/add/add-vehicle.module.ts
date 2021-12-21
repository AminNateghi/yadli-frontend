import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AddVehicleComponent } from './add-vehicle.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VehicleService } from '@app/shared/services/vehicle.service';
import { InputModule } from '@app/shared/modules/yl-input/input.module';

const routes: Routes = [
  {
    path: '',
    component: AddVehicleComponent
  },
];

@NgModule({
  declarations: [
    AddVehicleComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    InputModule
  ],
  providers: [
    VehicleService
  ]
})
export class AddVehicleModule { }

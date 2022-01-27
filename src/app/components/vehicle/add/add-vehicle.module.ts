import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AddVehicleComponent } from './add-vehicle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VehicleService } from '@app/shared/services/vehicle.service';
import { YlTextBoxModule } from '@app/shared/modules/yl-text-box/text-box.module';
import { YlSelectBoxModule } from '@app/shared/modules/yl-select-box/select-box.module';
import { YlHeadingModule } from '@app/shared/modules/yl-heading/heading.module';

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
    FormsModule,
    ReactiveFormsModule,
    YlTextBoxModule,
    YlSelectBoxModule,
    YlHeadingModule
  ],
  providers: [
    VehicleService
  ]
})
export class AddVehicleModule { }

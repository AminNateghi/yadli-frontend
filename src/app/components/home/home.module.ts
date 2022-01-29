import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { VehicleService } from '@app/shared/services/vehicle.service';
import { LoadingModule } from '@app/shared/modules/loading/loading.module';
import { YlVehicleBoxModule } from '@app/shared/modules/yl-vehicle-box/vehicle-box.module';
import { YlSliderModule } from '@app/shared/modules/yl-slider/slider.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
];

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LoadingModule,
    YlVehicleBoxModule,
    YlSliderModule
  ],
  providers: [
    VehicleService
  ]
})
export class HomeModule { }

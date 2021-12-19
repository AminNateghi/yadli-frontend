import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { UiComponent } from './ui.component';
import { InputModule } from '@app/shared/modules/yl-input/input.module';

const routes: Routes = [
  {
    path: '',
    component: UiComponent
  },
];

@NgModule({
  declarations: [
    UiComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    InputModule
  ],
  providers: [
  ]
})
export class UiModule { }

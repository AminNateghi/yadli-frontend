import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { UiComponent } from './ui.component';

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
  ],
  providers: [
  ]
})
export class UiModule { }
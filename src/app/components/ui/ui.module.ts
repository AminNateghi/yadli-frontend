import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { UiComponent } from './ui.component';
import { YlTextBoxModule } from '@app/shared/modules/yl-text-box/text-box.module';
import { YlSelectBoxModule } from '@app/shared/modules/yl-select-box/select-box.module';

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
    YlTextBoxModule,
    YlSelectBoxModule
  ],
  providers: [
  ]
})
export class UiModule { }

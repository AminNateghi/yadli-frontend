import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ViewProfileComponent } from './view-profile.component';


const routes: Routes = [
  {
    path: '',
    component: ViewProfileComponent
  },
];

@NgModule({
  declarations: [
    ViewProfileComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers: [
  ]
})
export class ViewProfileModule { }

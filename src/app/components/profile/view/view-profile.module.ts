import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ViewProfileComponent } from './view-profile.component';
import { UserService } from '@app/shared/services/user.service';


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
    UserService
  ]
})
export class ViewProfileModule { }

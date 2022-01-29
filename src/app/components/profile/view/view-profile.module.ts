import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ViewProfileComponent } from './view-profile.component';
import { UserService } from '@app/shared/services/user.service';
import { YlHeadingModule } from '@app/shared/modules/yl-heading/heading.module';
import { YlTextBoxModule } from '@app/shared/modules/yl-text-box/text-box.module';


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
    YlHeadingModule,
    YlTextBoxModule
  ],
  providers: [
    UserService
  ]
})
export class ViewProfileModule { }

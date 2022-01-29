import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EditProfileComponent } from './edit-profile.component';
import { UserService } from '@app/shared/services/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { YlHeadingModule } from '@app/shared/modules/yl-heading/heading.module';
import { YlTextBoxModule } from '@app/shared/modules/yl-text-box/text-box.module';

const routes: Routes = [
  {
    path: '',
    component: EditProfileComponent
  },
];

@NgModule({
  declarations: [
    EditProfileComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    YlHeadingModule,
    YlTextBoxModule
  ],
  providers: [
    UserService
  ]
})
export class EditProfileModule { }

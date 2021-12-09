import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EditProfileComponent } from './edit-profile.component';
import { UserService } from '@app/shared/services/user.service';
import { ReactiveFormsModule } from '@angular/forms';

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
    ReactiveFormsModule
  ],
  providers: [
    UserService
  ]
})
export class EditProfileModule { }

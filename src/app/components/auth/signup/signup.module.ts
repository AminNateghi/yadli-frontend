import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '@app/shared/services/auth.service';

const routes: Routes = [
  {
    path: '',
    component: SignUpComponent
  },
];

@NgModule({
  declarations: [
    SignUpComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
  ],
  providers: [
    AuthService
  ]
})
export class SignUpModule { }

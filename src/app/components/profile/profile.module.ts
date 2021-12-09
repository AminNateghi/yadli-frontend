import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: 'view',
    loadChildren: () => import('./view/view-profile.module').then(m => m.ViewProfileModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./edit/edit-profile.module').then(m => m.EditProfileModule)
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class ProfileModule { }

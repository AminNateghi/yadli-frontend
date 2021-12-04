import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './infrastructure/guard/auth.guard';
import { LayoutEmptyComponent } from './infrastructure/layouts/layout-empty/layout-empty.component';
import { LayoutMainComponent } from './infrastructure/layouts/layout-main/layout-main.component';

const routes: Routes = [
  {
    path: 'home',
    component: LayoutMainComponent,
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LayoutEmptyComponent,
    loadChildren: () => import('./components/auth/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register',
    component: LayoutEmptyComponent,
    loadChildren: () => import('./components/auth/signup/signup.module').then(m => m.SignUpModule)
  },

  // default page
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  // if url doesn't exist redirect to 404 page
  { path: '**', redirectTo: '/page-not-found', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

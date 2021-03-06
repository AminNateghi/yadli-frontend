import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './infrastructure/guard/auth.guard';
import { LayoutEmptyComponent } from './infrastructure/layouts/layout-empty/layout-empty.component';
import { LayoutMainComponent } from './infrastructure/layouts/layout-main/layout-main.component';
import { AuthService } from './shared/services/auth.service';

const routes: Routes = [
  {
    path: 'ui',
    component: LayoutMainComponent,
    loadChildren: () => import('./components/ui/ui.module').then(m => m.UiModule),
    canActivate: [AuthGuard]
  },
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
  {
    path: 'profile',
    component: LayoutMainComponent,
    loadChildren: () => import('./components/profile/profile.module').then(m => m.ProfileModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'vehicle',
    component: LayoutMainComponent,
    loadChildren: () => import('./components/vehicle/vehicle.module').then(m => m.VehicleModule),
    canActivate: [AuthGuard]
  },

  // default page
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  // if url doesn't exist redirect to 404 page
  { path: '**', redirectTo: '/page-not-found', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthService]
})
export class AppRoutingModule { }

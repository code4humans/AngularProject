import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './auth/auth.guard';

const appRoutes: Routes = [
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'customer',
    loadChildren : './customer/customer.module#CustomerModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'order',
    loadChildren : './order/order.module#OrderModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'supplier',
    loadChildren : './supplier/supplier.module#SupplierModule',
    canLoad: [AuthGuard]
  },
  {
      path: 'login',
      component: LoginComponent
  },
  { path: 'logout', component: LogoutComponent },
  {
    path: '', redirectTo:  '/login', pathMatch: 'full'
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

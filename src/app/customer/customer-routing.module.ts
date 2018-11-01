import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { Role } from '../auth/role.enum';
import { AuthGuard } from '../auth/auth.guard';

const customerRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component : CustomerListComponent
      }
    ],
    canActivate : [AuthGuard],
    data: {      expectedRole: Role.AdminSupplier   }

  }
];

@NgModule({
  imports: [
    RouterModule.forChild(customerRoutes)
  ],
  exports : [
    RouterModule
  ],
  declarations: []
})
export class CustomerRoutingModule { }

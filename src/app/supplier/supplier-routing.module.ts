import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SupplierContainerComponent } from './supplier-container.component';
import { AuthGuard } from '../auth/auth.guard';
import { Role } from '../auth/role.enum';

const supplierRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component : SupplierContainerComponent
      }
    ],
    canActivate : [AuthGuard],
    data: {expectedRole: Role.AdminSupplier}

  }
];

@NgModule({
  imports: [
    RouterModule.forChild(supplierRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class SupplierRoutingModule { }

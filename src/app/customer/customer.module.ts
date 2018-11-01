import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerRoutingModule } from './/customer-routing.module';
import { MatCardModule, MatButtonModule, MatPaginatorModule, MatDialogModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { DetailCustomerComponent } from './detail-customer/detail-customer.component';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomerRoutingModule,
    MaterialModule
  ],
  declarations: [CustomerListComponent, NewCustomerComponent, EditCustomerComponent, DetailCustomerComponent],
  entryComponents: [NewCustomerComponent, EditCustomerComponent, DetailCustomerComponent]
})
export class CustomerModule { }

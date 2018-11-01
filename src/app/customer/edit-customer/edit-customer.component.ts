import { Component, OnInit, Inject } from '@angular/core';
import { EditCustomerService } from './edit-customer.service';
import { AddOrEditCustomer } from '../models/AddOrEditCustomer';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { WhiteSpaceValidator } from '../../shared/validators/whiteSpaceValidator';

export interface DialogData {
  id: number;
}

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss'],
  providers: [EditCustomerService]
})
export class EditCustomerComponent implements OnInit {

  newCustomerForm: FormGroup;
  customer: AddOrEditCustomer;
  constructor(private service: EditCustomerService, private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditCustomerComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      this.customerRetrieved(data.id);
    }

  ngOnInit() {
    this.buildNewCustomerForm();
  }
  buildNewCustomerForm(): void {
    this.newCustomerForm = this.fb.group({
      firstName: ['', [Validators.required, WhiteSpaceValidator.cannotContainSpace]],
      lastName: ['', Validators.compose([Validators.required, WhiteSpaceValidator.cannotContainSpace])],
      city: ['', Validators.compose([Validators.required, WhiteSpaceValidator.cannotContainSpace])],
      country: ['', Validators.compose([Validators.required, WhiteSpaceValidator.cannotContainSpace])],
      phone: ['', Validators.compose([Validators.required, WhiteSpaceValidator.cannotContainSpace])]
    }) ;
  }

  customerRetrieved(id: number): void {

    this.service.getCustomerById(id)
      .subscribe(response => {
        this.customer = response;
        this.newCustomerForm.patchValue({
          firstName : response.firstName,
          lastName : response.lastName,
          city : response.city,
          country : response.country,
          phone : response.phone
        });
      });
  }

  save(): void {
    if (this.newCustomerForm.dirty && this.newCustomerForm.valid) {
      const p = Object.assign({}, this.customer, this.newCustomerForm.value);
      p.id = this.data.id;
      this.service.editCustomer(p)
      .subscribe(response => {
        this.dialogRef.close();
      });
    } else if (!this.newCustomerForm.dirty) {
      this.newCustomerForm.reset();
    }
  }
}

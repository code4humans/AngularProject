import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AddOrEditCustomer } from '../models/AddOrEditCustomer';
import { WhiteSpaceValidator } from '../../shared/validators/whiteSpaceValidator';
import { NewCustomerService } from './new-customer.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss'],
  providers: [NewCustomerService]
})
export class NewCustomerComponent implements OnInit {

  newCustomerForm: FormGroup;
  customer: AddOrEditCustomer;

  constructor(private fb: FormBuilder, private service: NewCustomerService,
              public dialogRef: MatDialogRef<NewCustomerComponent>) { }

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
  save(): void {
    if (this.newCustomerForm.dirty && this.newCustomerForm.valid) {
      const p = Object.assign({}, this.customer, this.newCustomerForm.value);
      this.service.saveCustomer(p)
          .subscribe(response => {
            this.dialogRef.close();
          });
    } else if (!this.newCustomerForm.dirty) {
      this.newCustomerForm.reset();
    }
  }
}

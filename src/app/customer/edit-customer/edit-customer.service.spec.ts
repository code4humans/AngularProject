import { TestBed, inject } from '@angular/core/testing';

import { EditCustomerService } from './edit-customer.service';

describe('EditCustomerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditCustomerService]
    });
  });

  it('should be created', inject([EditCustomerService], (service: EditCustomerService) => {
    expect(service).toBeTruthy();
  }));
});

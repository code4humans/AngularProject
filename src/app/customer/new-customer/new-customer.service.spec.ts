import { TestBed, inject } from '@angular/core/testing';

import { NewCustomerService } from './new-customer.service';

describe('NewCustomerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewCustomerService]
    });
  });

  it('should be created', inject([NewCustomerService], (service: NewCustomerService) => {
    expect(service).toBeTruthy();
  }));
});

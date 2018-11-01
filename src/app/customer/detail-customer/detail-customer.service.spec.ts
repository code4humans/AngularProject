import { TestBed, inject } from '@angular/core/testing';

import { DetailCustomerService } from './detail-customer.service';

describe('DetailCustomerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetailCustomerService]
    });
  });

  it('should be created', inject([DetailCustomerService], (service: DetailCustomerService) => {
    expect(service).toBeTruthy();
  }));
});

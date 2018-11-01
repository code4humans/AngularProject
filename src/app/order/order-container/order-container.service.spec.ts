import { TestBed, inject } from '@angular/core/testing';

import { OrderContainerService } from './order-container.service';

describe('OrderContainerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderContainerService]
    });
  });

  it('should be created', inject([OrderContainerService], (service: OrderContainerService) => {
    expect(service).toBeTruthy();
  }));
});

import { CustomerRoutingModule } from './customer-routing.module';

describe('CustomerRoutingModule', () => {
  let customerRoutingModule: CustomerRoutingModule;

  beforeEach(() => {
    customerRoutingModule = new CustomerRoutingModule();
  });

  it('should create an instance', () => {
    expect(customerRoutingModule).toBeTruthy();
  });
});

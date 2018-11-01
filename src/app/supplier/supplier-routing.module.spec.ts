import { SupplierRoutingModule } from './supplier-routing.module';

describe('SupplierRoutingModule', () => {
  let supplierRoutingModule: SupplierRoutingModule;

  beforeEach(() => {
    supplierRoutingModule = new SupplierRoutingModule();
  });

  it('should create an instance', () => {
    expect(supplierRoutingModule).toBeTruthy();
  });
});

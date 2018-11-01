import { SupplierModule } from './supplier.module';

describe('SupplierModule', () => {
  let supplierModule: SupplierModule;

  beforeEach(() => {
    supplierModule = new SupplierModule();
  });

  it('should create an instance', () => {
    expect(supplierModule).toBeTruthy();
  });
});

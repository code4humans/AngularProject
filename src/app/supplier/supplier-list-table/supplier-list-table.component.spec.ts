import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierListTableComponent } from './supplier-list-table.component';

describe('SupplierListTableComponent', () => {
  let component: SupplierListTableComponent;
  let fixture: ComponentFixture<SupplierListTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierListTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

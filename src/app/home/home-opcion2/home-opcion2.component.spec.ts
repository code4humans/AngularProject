import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOpcion2Component } from './home-opcion2.component';

describe('HomeOpcion2Component', () => {
  let component: HomeOpcion2Component;
  let fixture: ComponentFixture<HomeOpcion2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeOpcion2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeOpcion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

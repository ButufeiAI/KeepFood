import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterDaterangepicker } from './filter-daterangepicker';

describe('FilterDaterangepicker', () => {
  let component: FilterDaterangepicker;
  let fixture: ComponentFixture<FilterDaterangepicker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterDaterangepicker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterDaterangepicker);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

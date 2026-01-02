import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPagination } from './custom-pagination';

describe('CustomPagination', () => {
  let component: CustomPagination;
  let fixture: ComponentFixture<CustomPagination>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomPagination]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomPagination);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

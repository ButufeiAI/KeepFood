import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderReport } from './order-report';

describe('OrderReport', () => {
  let component: OrderReport;
  let fixture: ComponentFixture<OrderReport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderReport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderReport);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

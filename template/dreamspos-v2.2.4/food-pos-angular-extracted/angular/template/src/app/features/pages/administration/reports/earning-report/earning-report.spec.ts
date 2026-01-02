import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarningReport } from './earning-report';

describe('EarningReport', () => {
  let component: EarningReport;
  let fixture: ComponentFixture<EarningReport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EarningReport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EarningReport);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

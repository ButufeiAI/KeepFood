import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColSidebar } from './two-col-sidebar';

describe('TwoColSidebar', () => {
  let component: TwoColSidebar;
  let fixture: ComponentFixture<TwoColSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoColSidebar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoColSidebar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

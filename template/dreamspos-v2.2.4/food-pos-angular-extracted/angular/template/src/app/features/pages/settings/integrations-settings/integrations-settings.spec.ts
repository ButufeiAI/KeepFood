import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationsSettings } from './integrations-settings';

describe('IntegrationsSettings', () => {
  let component: IntegrationsSettings;
  let fixture: ComponentFixture<IntegrationsSettings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntegrationsSettings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntegrationsSettings);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

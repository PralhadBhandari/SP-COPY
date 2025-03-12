import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SowSummaryComponent } from './sow-summary.component';

describe('SowSummaryComponent', () => {
  let component: SowSummaryComponent;
  let fixture: ComponentFixture<SowSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SowSummaryComponent]
    });
    fixture = TestBed.createComponent(SowSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

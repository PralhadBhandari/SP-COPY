import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SowMainscreenComponent } from './sow-mainscreen.component';

describe('SowMainscreenComponent', () => {
  let component: SowMainscreenComponent;
  let fixture: ComponentFixture<SowMainscreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SowMainscreenComponent]
    });
    fixture = TestBed.createComponent(SowMainscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

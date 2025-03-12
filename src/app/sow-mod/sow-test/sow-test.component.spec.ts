import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SowTestComponent } from './sow-test.component';

describe('SowTestComponent', () => {
  let component: SowTestComponent;
  let fixture: ComponentFixture<SowTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SowTestComponent]
    });
    fixture = TestBed.createComponent(SowTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

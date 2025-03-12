import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpolyeeMainscreenComponent } from './empolyee-mainscreen.component';

describe('EmpolyeeMainscreenComponent', () => {
  let component: EmpolyeeMainscreenComponent;
  let fixture: ComponentFixture<EmpolyeeMainscreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpolyeeMainscreenComponent]
    });
    fixture = TestBed.createComponent(EmpolyeeMainscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

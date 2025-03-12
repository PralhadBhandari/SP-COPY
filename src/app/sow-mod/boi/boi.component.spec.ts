import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoiComponent } from './boi.component';

describe('BoiComponent', () => {
  let component: BoiComponent;
  let fixture: ComponentFixture<BoiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoiComponent]
    });
    fixture = TestBed.createComponent(BoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

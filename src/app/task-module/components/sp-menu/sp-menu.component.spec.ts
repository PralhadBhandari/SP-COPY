import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpMenuComponent } from './sp-menu.component';

describe('SpMenuComponent', () => {
  let component: SpMenuComponent;
  let fixture: ComponentFixture<SpMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpMenuComponent]
    });
    fixture = TestBed.createComponent(SpMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

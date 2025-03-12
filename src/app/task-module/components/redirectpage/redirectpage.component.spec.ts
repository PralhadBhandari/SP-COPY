import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectpageComponent } from './redirectpage.component';

describe('RedirectpageComponent', () => {
  let component: RedirectpageComponent;
  let fixture: ComponentFixture<RedirectpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RedirectpageComponent]
    });
    fixture = TestBed.createComponent(RedirectpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

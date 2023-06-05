import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccoutsComponent } from './accouts.component';

describe('AccoutsComponent', () => {
  let component: AccoutsComponent;
  let fixture: ComponentFixture<AccoutsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccoutsComponent]
    });
    fixture = TestBed.createComponent(AccoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GadgetTableComponent } from './gadget-table.component';

describe('GadgetTableComponent', () => {
  let component: GadgetTableComponent;
  let fixture: ComponentFixture<GadgetTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GadgetTableComponent]
    });
    fixture = TestBed.createComponent(GadgetTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddresstableComponent } from './addresstable.component';

describe('AddresstableComponent', () => {
  let component: AddresstableComponent;
  let fixture: ComponentFixture<AddresstableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddresstableComponent]
    });
    fixture = TestBed.createComponent(AddresstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

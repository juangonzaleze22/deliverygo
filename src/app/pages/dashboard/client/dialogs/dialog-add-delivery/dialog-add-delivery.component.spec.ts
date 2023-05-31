import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddDeliveryComponent } from './dialog-add-delivery.component';

describe('DialogAddDeliveryComponent', () => {
  let component: DialogAddDeliveryComponent;
  let fixture: ComponentFixture<DialogAddDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

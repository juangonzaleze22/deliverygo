import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateDeliveryProductComponent } from './dialog-create-delivery-product.component';

describe('DialogCreateDeliveryProductComponent', () => {
  let component: DialogCreateDeliveryProductComponent;
  let fixture: ComponentFixture<DialogCreateDeliveryProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCreateDeliveryProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCreateDeliveryProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

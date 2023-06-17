import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDetailDeliveryComponent } from './dialog-detail-delivery.component';

describe('DialogDetailDeliveryComponent', () => {
  let component: DialogDetailDeliveryComponent;
  let fixture: ComponentFixture<DialogDetailDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDetailDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDetailDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

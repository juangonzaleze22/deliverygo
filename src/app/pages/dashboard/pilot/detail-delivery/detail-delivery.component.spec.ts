import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDeliveryComponent } from './detail-delivery.component';

describe('DetailDeliveryComponent', () => {
  let component: DetailDeliveryComponent;
  let fixture: ComponentFixture<DetailDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

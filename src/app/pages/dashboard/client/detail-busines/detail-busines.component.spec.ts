import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBusinesComponent } from './detail-busines.component';

describe('DetailBusinesComponent', () => {
  let component: DetailBusinesComponent;
  let fixture: ComponentFixture<DetailBusinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailBusinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBusinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

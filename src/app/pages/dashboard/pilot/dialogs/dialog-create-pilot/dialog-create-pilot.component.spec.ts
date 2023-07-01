import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreatePilotComponent } from './dialog-create-pilot.component';

describe('DialogCreatePilotComponent', () => {
  let component: DialogCreatePilotComponent;
  let fixture: ComponentFixture<DialogCreatePilotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCreatePilotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCreatePilotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

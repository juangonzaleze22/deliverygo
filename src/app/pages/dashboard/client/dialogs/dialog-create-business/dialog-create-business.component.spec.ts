import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateBusinessComponent } from './dialog-create-business.component';

describe('DialogCreateBusinessComponent', () => {
  let component: DialogCreateBusinessComponent;
  let fixture: ComponentFixture<DialogCreateBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCreateBusinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCreateBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

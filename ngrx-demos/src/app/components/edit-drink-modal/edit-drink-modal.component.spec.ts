import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDrinkModalComponent } from './edit-drink-modal.component';

describe('EditDrinkModalComponent', () => {
  let component: EditDrinkModalComponent;
  let fixture: ComponentFixture<EditDrinkModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDrinkModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDrinkModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

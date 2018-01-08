import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodTypesFormComponent } from './food-types-form.component';

describe('FoodTypesFormComponent', () => {
  let component: FoodTypesFormComponent;
  let fixture: ComponentFixture<FoodTypesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodTypesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodTypesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

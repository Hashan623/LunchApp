import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodTypesViewComponent } from './food-types-view.component';

describe('FoodTypesViewComponent', () => {
  let component: FoodTypesViewComponent;
  let fixture: ComponentFixture<FoodTypesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodTypesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodTypesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

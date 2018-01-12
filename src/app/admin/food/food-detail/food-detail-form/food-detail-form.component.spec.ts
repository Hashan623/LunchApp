import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodDetailFormComponent } from './food-detail-form.component';

describe('FoodDetailFormComponent', () => {
  let component: FoodDetailFormComponent;
  let fixture: ComponentFixture<FoodDetailFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodDetailFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

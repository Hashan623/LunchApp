import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlevelsFormComponent } from './userlevels-form.component';

describe('UserlevelsFormComponent', () => {
  let component: UserlevelsFormComponent;
  let fixture: ComponentFixture<UserlevelsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserlevelsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserlevelsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

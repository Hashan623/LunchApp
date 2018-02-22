import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlevelsViewComponent } from './userlevels-view.component';

describe('UserlevelsViewComponent', () => {
  let component: UserlevelsViewComponent;
  let fixture: ComponentFixture<UserlevelsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserlevelsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserlevelsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLevelPersmissonComponent } from './user-level-persmisson.component';

describe('UserLevelPersmissonComponent', () => {
  let component: UserLevelPersmissonComponent;
  let fixture: ComponentFixture<UserLevelPersmissonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLevelPersmissonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLevelPersmissonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

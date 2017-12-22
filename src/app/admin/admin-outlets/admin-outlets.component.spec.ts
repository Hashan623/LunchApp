import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOutletsComponent } from './admin-outlets.component';

describe('AdminOutletsComponent', () => {
  let component: AdminOutletsComponent;
  let fixture: ComponentFixture<AdminOutletsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOutletsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOutletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

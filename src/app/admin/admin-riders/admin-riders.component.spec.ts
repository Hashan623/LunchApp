import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRidersComponent } from './admin-riders.component';

describe('AdminRidersComponent', () => {
  let component: AdminRidersComponent;
  let fixture: ComponentFixture<AdminRidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentGroupComponent } from './component-group.component';

describe('CategoryGroupComponent', () => {
  let component: ComponentGroupComponent;
  let fixture: ComponentFixture<ComponentGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

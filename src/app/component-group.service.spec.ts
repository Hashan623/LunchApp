import { TestBed, inject } from '@angular/core/testing';

import { ComponentGroupService } from './component-group.service';

describe('ComponentGroupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComponentGroupService]
    });
  });

  it('should be created', inject([ComponentGroupService], (service: ComponentGroupService) => {
    expect(service).toBeTruthy();
  }));
});

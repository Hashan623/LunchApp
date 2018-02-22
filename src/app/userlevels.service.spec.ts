import { TestBed, inject } from '@angular/core/testing';

import { UserlevelsService } from './userlevels.service';

describe('UserlevelsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserlevelsService]
    });
  });

  it('should be created', inject([UserlevelsService], (service: UserlevelsService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { UsercrudService } from './usercrud.service';

describe('UsercrudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsercrudService]
    });
  });

  it('should be created', inject([UsercrudService], (service: UsercrudService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { OutletAuthGuardService } from './outlet-auth-guard.service';

describe('OutletAuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OutletAuthGuardService]
    });
  });

  it('should be created', inject([OutletAuthGuardService], (service: OutletAuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});

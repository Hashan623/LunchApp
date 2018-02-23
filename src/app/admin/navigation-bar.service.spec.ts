import { TestBed, inject } from '@angular/core/testing';

import { NavigationBarService } from './navigation-bar.service';

describe('NavigationBarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavigationBarService]
    });
  });

  it('should be created', inject([NavigationBarService], (service: NavigationBarService) => {
    expect(service).toBeTruthy();
  }));
});

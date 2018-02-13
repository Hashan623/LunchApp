import { TestBed, inject } from '@angular/core/testing';

import { XxxService } from './xxx.service';

describe('XxxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [XxxService]
    });
  });

  it('should be created', inject([XxxService], (service: XxxService) => {
    expect(service).toBeTruthy();
  }));
});

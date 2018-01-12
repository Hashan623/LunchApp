import { TestBed, inject } from '@angular/core/testing';

import { FooddetailService } from './fooddetail.service';

describe('FooddetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FooddetailService]
    });
  });

  it('should be created', inject([FooddetailService], (service: FooddetailService) => {
    expect(service).toBeTruthy();
  }));
});

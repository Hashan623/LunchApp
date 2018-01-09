import { TestBed, inject } from '@angular/core/testing';

import { FoodtypeService } from './foodtype.service';

describe('FoodtypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoodtypeService]
    });
  });

  it('should be created', inject([FoodtypeService], (service: FoodtypeService) => {
    expect(service).toBeTruthy();
  }));
});

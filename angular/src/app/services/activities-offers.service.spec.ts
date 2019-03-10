import { TestBed } from '@angular/core/testing';

import { ActivitiesOffersService } from './activities-offers.service';

describe('ActivitiesOffersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActivitiesOffersService = TestBed.get(ActivitiesOffersService);
    expect(service).toBeTruthy();
  });
});

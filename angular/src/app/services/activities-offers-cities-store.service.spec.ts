import { TestBed } from '@angular/core/testing';

import { ActivitiesOffersCitiesStoreService } from './activities-offers-cities-store.service';

describe('ActivitiesOffersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActivitiesOffersCitiesStoreService = TestBed.get(ActivitiesOffersCitiesStoreService);
    expect(service).toBeTruthy();
  });
});

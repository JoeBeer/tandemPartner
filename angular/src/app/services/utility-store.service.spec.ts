import { TestBed } from '@angular/core/testing';

import { UtilityStoreService } from './utility-store.service';

describe('UtilityStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UtilityStoreService = TestBed.get(UtilityStoreService);
    expect(service).toBeTruthy();
  });
});

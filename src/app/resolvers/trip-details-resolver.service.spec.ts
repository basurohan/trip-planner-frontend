import { TestBed } from '@angular/core/testing';

import { TripDetailsResolverService } from './trip-details-resolver.service';

describe('TripDetailsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TripDetailsResolverService = TestBed.get(TripDetailsResolverService);
    expect(service).toBeTruthy();
  });
});

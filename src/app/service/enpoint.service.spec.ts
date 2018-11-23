import { TestBed } from '@angular/core/testing';

import { EnpointService } from './enpoint.service';

describe('EnpointService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnpointService = TestBed.get(EnpointService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { LibValidatorsService } from './lib-validators.service';

describe('LibValidatorsService', () => {
  let service: LibValidatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibValidatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

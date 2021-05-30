import { TestBed } from '@angular/core/testing';

import { ProedService } from './proed.service';

describe('ProedService', () => {
  let service: ProedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { GetSearchIccScanService } from './get-search-icc-scan.service';

describe('GetSearchIccScanService', () => {
  let service: GetSearchIccScanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSearchIccScanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

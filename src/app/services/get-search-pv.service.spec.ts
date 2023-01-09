import { TestBed } from '@angular/core/testing';

import { GetSearchPvService } from './get-search-pv.service';

describe('GetSearchPvService', () => {
  let service: GetSearchPvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSearchPvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

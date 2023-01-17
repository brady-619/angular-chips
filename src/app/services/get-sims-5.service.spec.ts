import { TestBed } from '@angular/core/testing';

import { GetSims5Service } from './get-sims-5.service';

describe('GetSims5Service', () => {
  let service: GetSims5Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSims5Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

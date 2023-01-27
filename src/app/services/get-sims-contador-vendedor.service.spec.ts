import { TestBed } from '@angular/core/testing';

import { GetSimsContadorVendedorService } from './get-sims-contador-vendedor.service';

describe('GetSimsContadorVendedorService', () => {
  let service: GetSimsContadorVendedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSimsContadorVendedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

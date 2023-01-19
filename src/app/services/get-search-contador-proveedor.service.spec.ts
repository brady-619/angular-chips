import { TestBed } from '@angular/core/testing';

import { GetSearchContadorProveedorService } from './get-search-contador-proveedor.service';

describe('GetSearchContadorProveedorService', () => {
  let service: GetSearchContadorProveedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSearchContadorProveedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

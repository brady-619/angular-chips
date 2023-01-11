import { TestBed } from '@angular/core/testing';

import { GetVentasService } from './get-ventas.service';

describe('GetVentasService', () => {
  let service: GetVentasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetVentasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

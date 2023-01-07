import { TestBed } from '@angular/core/testing';

import { InsertPuntoDeVentaService } from './insert-punto-de-venta.service';

describe('InsertPuntoDeVentaService', () => {
  let service: InsertPuntoDeVentaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsertPuntoDeVentaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { GetPuntosDeVentaService } from './get-puntos-de-venta.service';

describe('GetPuntosDeVentaService', () => {
  let service: GetPuntosDeVentaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPuntosDeVentaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

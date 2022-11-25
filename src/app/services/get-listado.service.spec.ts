import { TestBed } from '@angular/core/testing';

import { GetListadoService } from './get-listado.service';

describe('GetListadoService', () => {
  let service: GetListadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetListadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

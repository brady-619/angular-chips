import { TestBed } from '@angular/core/testing';

import { InsertLogVentaSimsService } from './insert-log-venta-sims.service';

describe('InsertLogVentaSimsService', () => {
  let service: InsertLogVentaSimsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsertLogVentaSimsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

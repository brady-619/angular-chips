import { TestBed } from '@angular/core/testing';

import { UpdateVentaSimService } from './update-venta-sim.service';

describe('UpdateVentaSimService', () => {
  let service: UpdateVentaSimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateVentaSimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

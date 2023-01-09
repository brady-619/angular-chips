import { TestBed } from '@angular/core/testing';

import { GetSimsAVenderAttService } from './get-sims-a-vender-att.service';

describe('GetSimsAVenderAttService', () => {
  let service: GetSimsAVenderAttService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSimsAVenderAttService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

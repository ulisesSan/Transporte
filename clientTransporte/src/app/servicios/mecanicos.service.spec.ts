import { TestBed } from '@angular/core/testing';

import { MecanicosService } from './mecanicos.service';

describe('MecanicosService', () => {
  let service: MecanicosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MecanicosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

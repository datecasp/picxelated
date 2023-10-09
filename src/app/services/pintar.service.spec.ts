import { TestBed } from '@angular/core/testing';

import { PintarService } from './pintar.service';

describe('PintarService', () => {
  let service: PintarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PintarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

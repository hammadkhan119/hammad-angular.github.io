import { TestBed } from '@angular/core/testing';

import { WilsonService } from './wilson.service';

describe('WilsonService', () => {
  let service: WilsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WilsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

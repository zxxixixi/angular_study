import { TestBed } from '@angular/core/testing';

import { ServemyService } from './servemy.service';

describe('ServemyService', () => {
  let service: ServemyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServemyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

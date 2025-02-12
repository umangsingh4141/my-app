import { TestBed } from '@angular/core/testing';

import { DataBindingServiceService } from './data-binding-service.service';

describe('DataBindingServiceService', () => {
  let service: DataBindingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataBindingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

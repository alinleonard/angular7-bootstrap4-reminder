import { TestBed } from '@angular/core/testing';

import { AutoServicesService } from './auto-services.service';

describe('AutoServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutoServicesService = TestBed.get(AutoServicesService);
    expect(service).toBeTruthy();
  });
});

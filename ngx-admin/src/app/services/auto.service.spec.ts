import { TestBed, inject } from '@angular/core/testing';

import { AutoService } from './auto.service';

describe('AutoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutoService]
    });
  });

  it('should be created', inject([AutoService], (service: AutoService) => {
    expect(service).toBeTruthy();
  }));
});

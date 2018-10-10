import { TestBed, inject } from '@angular/core/testing';

import { RemindersService } from './reminders.service';

describe('RemindersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RemindersService]
    });
  });

  it('should be created', inject([RemindersService], (service: RemindersService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { AutoRemindersService } from './auto-reminders.service';

describe('AutoRemindersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutoRemindersService]
    });
  });

  it('should be created', inject([AutoRemindersService], (service: AutoRemindersService) => {
    expect(service).toBeTruthy();
  }));
});

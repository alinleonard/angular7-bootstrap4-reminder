import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Reminder {
  id: number;
  title: string;
}

@Injectable({ providedIn: 'root' })

export class RemindersService {
  constructor(private http: HttpClient) { }

  apiUrl = 'https://jsonplaceholder.typicode.com';

  getReminders() {
    return this.http.get<Reminder>(`${this.apiUrl}/todos`);
  }
  getReminder(reminderId) {
    return this.http.get<Reminder>(`${this.apiUrl}/todos${reminderId}`);
  }
}

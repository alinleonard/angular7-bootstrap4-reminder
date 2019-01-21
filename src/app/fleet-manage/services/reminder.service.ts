import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Reminder } from '../models/reminder';
import { HandleError } from '../../shared/services/handleError';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
    //   'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})

export class ReminderService {

  baseUrl = 'http://localhost:8081/api/auto/reminder';

  constructor(private http: HttpClient) { }

  getList(): Observable<Reminder[]> {
    return this.http.get<Reminder[]>(this.baseUrl)
    .pipe(catchError(HandleError.handleError));
  }

  create(reminder: Reminder): Observable<Reminder> {
    return this.http.post<Reminder>(this.baseUrl, reminder, httpOptions)
    .pipe(catchError(HandleError.handleError));
  }

  getById(Id): Observable<Reminder> {
    return this.http.get<Reminder>(`${this.baseUrl}/${Id}`)
    .pipe(catchError(HandleError.handleError));
  }

  update(reminder: Reminder): Observable<Reminder> {
    return this.http.put<Reminder>(`${this.baseUrl}/${reminder._id}`, reminder, httpOptions)
    .pipe(catchError(HandleError.handleError));
  }

  delete(Id): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${Id}`)
      .pipe(catchError(HandleError.handleError));
  }
}

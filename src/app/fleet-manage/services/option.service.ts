import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HandleError } from '../../shared/services/handleError';
import { Option } from '../models/option';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
    //   'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})

export class OptionService {

  baseUrl = 'http://localhost:8081/api/auto/options';

  constructor(private http: HttpClient) { }

  getExpensesList(): Observable<Option[]> {
    return this.http.get<Option[]>(this.baseUrl + '/expense')
    .pipe(catchError(HandleError.handleError));
  }

  createExpensesList(option: Option): Observable<Option> {
    return this.http.post<Option>(this.baseUrl + '/expense', option, httpOptions)
    .pipe(catchError(HandleError.handleError));
  }

  updateExpensesList(option: Option): Observable<Option> {
    return this.http.put<Option>(`${this.baseUrl}/expense/${option._id}`, option, httpOptions)
    .pipe(catchError(HandleError.handleError));
  }

  deleteExpensesList(Id): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/expense/${Id}`)
      .pipe(catchError(HandleError.handleError));
  }

  getServicesList(): Observable<Option[]> {
    return this.http.get<Option[]>(this.baseUrl + '/service')
    .pipe(catchError(HandleError.handleError));
  }

  createServicesList(option: Option): Observable<Option> {
    return this.http.post<Option>(this.baseUrl + '/service', option, httpOptions)
    .pipe(catchError(HandleError.handleError));
  }

  updateServicesList(option: Option): Observable<Option> {
    return this.http.put<Option>(`${this.baseUrl}/service/${option._id}`, option, httpOptions)
    .pipe(catchError(HandleError.handleError));
  }

  deleteServicesList(Id): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/service/${Id}`)
      .pipe(catchError(HandleError.handleError));
  }
}

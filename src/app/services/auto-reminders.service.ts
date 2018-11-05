import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Vehicle {
  _id: number;
  type: string;
  name: string;
};

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})

export class AutoService {
  apiUrl = 'assets';
  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      throwError(`An error occured: ${error.error.message}`);
    } else {
      throwError(
        `Backend returned code ${error.status}` +
        `body was: ${error.error}`
      );
    }

    return throwError('Something bad happend; please try again later');
  }

  getExpenses() {
    return this.http.get(`${this.apiUrl}/expenses.json`)
  }

  getServices() {
    return this.http.get(`${this.apiUrl}/services.json`)
  }

  getVehicles() {
    return this.http.get(`${this.apiUrl}/vehicles.json`);
  }

  postVehicle(vehicle: Vehicle): Observable<Vehicle> {
    return this.http.post<Vehicle>(this.apiUrl, vehicle, httpOptions)
      .pipe(
        catchError(this.handleError)
      )
  }
}

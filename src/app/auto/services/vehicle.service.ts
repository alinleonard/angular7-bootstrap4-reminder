import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Vehicle } from '../models/vehicle';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    //   'Authorization': 'my-auth-token'
    })
  };

@Injectable({
    providedIn: 'root'
})

export class VehiclesService {
    constructor(private http: HttpClient) { }

    baseUrl = 'http://localhost:8081/api/auto/vehicle';

    getList(): Observable<Vehicle[]> {
        return this.http.get<Vehicle[]>(this.baseUrl)
            .pipe(catchError(this.handleError));
    }

    create(vehicle: Vehicle) {
        return this.http.post<Vehicle>(this.baseUrl, vehicle, httpOptions)
            .pipe(catchError(this.handleError));
    }

    getById(Id) {
        return this.http.get(`${this.baseUrl}/${Id}`)
            .pipe(catchError(this.handleError));
    }

    update(vehicle: Vehicle) {
        return this.http.put(`${this.baseUrl}/${vehicle._id}`, vehicle, httpOptions)
            .pipe(catchError(this.handleError));
    }

    delete(Id): Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/${Id}`)
            .pipe(catchError(this.handleError));
    }

    private handleError(errorResponse: HttpErrorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
            // console.log('Client side error', errorResponse.error);
        } else {
            // console.log('Service side error', errorResponse);
        }

        return throwError('There is a problem with the service');
    }
}

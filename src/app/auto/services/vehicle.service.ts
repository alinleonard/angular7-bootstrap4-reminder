import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Vehicle } from '../models/vehicle';
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

export class VehiclesService {
    constructor(private http: HttpClient) { }

    baseUrl = 'http://localhost:8081/api/auto/vehicle';

    getList(): Observable<Vehicle[]> {
        return this.http.get<Vehicle[]>(this.baseUrl)
            .pipe(catchError(HandleError.handleError));
    }

    create(vehicle: Vehicle) {
        return this.http.post<Vehicle>(this.baseUrl, vehicle, httpOptions)
            .pipe(catchError(HandleError.handleError));
    }

    getById(Id) {
        return this.http.get(`${this.baseUrl}/${Id}`)
            .pipe(catchError(HandleError.handleError));
    }

    update(vehicle: Vehicle) {
        return this.http.put(`${this.baseUrl}/${vehicle._id}`, vehicle, httpOptions)
            .pipe(catchError(HandleError.handleError));
    }

    delete(Id): Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/${Id}`)
            .pipe(catchError(HandleError.handleError));
    }
}

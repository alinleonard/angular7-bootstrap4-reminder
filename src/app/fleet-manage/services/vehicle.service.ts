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

    baseUrl = 'http://localhost:8081/api/fleet-manage/';

    getList(): Observable<Vehicle[]> {
        const endPoint = 'vehicle';

        return this.http.get<Vehicle[]>(this.baseUrl + endPoint)
            .pipe(catchError(HandleError.handleError));
    }

    create(vehicle: Vehicle) {
        const endPoint = 'vehicle';

        return this.http.post<Vehicle>(this.baseUrl + endPoint, vehicle, httpOptions)
            .pipe(catchError(HandleError.handleError));
    }

    // get a vehicle by their id
    getById(id: string): Observable<Vehicle> {
        const endPoint = 'vehicle';

        return this.http.get<Vehicle>(`${this.baseUrl}${endPoint}/${id}`)
            .pipe(catchError(HandleError.handleError));
    }

    update(vehicle: Vehicle) {
        const endPoint = 'vehicle';

        return this.http.put(`${this.baseUrl}${endPoint}/${vehicle._id}`, vehicle, httpOptions)
            .pipe(catchError(HandleError.handleError));
    }

    delete(Id): Observable<void> {
        const endPoint = 'vehicle';

        return this.http.delete<void>(`${this.baseUrl}${endPoint}/${Id}`)
            .pipe(catchError(HandleError.handleError));
    }
}

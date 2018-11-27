import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface Vehicle {
    _id: string;
    type: string;
    name: string;
    manufacturer: string;
    model: string;
    plate: string;
    year: string;
    chasis: string;
    vin: string;
    note: string;
    created: Date;

    status: boolean
}

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

    getList() {
        return this.http.get<Vehicle[]>('http://localhost:8081/api/auto/vehicle');
    }

    create(vehicle: Vehicle) {
        return this.http.post<Vehicle>('http://localhost:8081/api/auto/vehicle', vehicle, httpOptions);
    }

    getById(Id) {
        return this.http.get(`http://localhost:8081/api/auto/vehicle/${Id}`);
    }

    update(vehicle: Vehicle) {
        return this.http.put(`http://localhost:8081/api/auto/vehicle/${vehicle._id}`, vehicle, httpOptions);
    }

    delete(Id) {
        return this.http.delete(`http://localhost:8081/api/auto/vehicle/${Id}`);
    }
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface Locations {
  _id: string;
  name: string;
  address: string;
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})

export class AutoServicesService {
  apiUrl = 'assets/locations.json';

  constructor(private http: HttpClient) { }

  getLocations() {
    return this.http.get(this.apiUrl);
  }

  postLocation(location: Location) {
    return this.http.post<Locations>(this.apiUrl, location, httpOptions);
  }
}

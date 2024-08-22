import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IEmployee } from './employee.service';
import { retry } from 'rxjs';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  private _url: string = "/assets/data/employee.json";

  constructor(private http: HttpClient) { }

  // HttpClient API get() method => Fetch employees list
  getEmployees(): Observable<IEmployee> {
    return this.http.get<IEmployee>(this._url )
  }

//  working with  hard-coded  data.
  /* getEmployees(){
  return  [
    {
      "name": "Douglas  Pace",
      "age": 35,
      "country": 'MARS'
    },
    {
      "name": "Mcleod  Mueller",
      "age": 32,
      "country": 'USA'
    },
    {
      "name": "Day  Meyers",
      "age": 21,
      "country": 'HK'
    },
    {
      "name": "Aguirre  Ellis",
      "age": 34,
      "country": 'UK'
    }
  ]
} */
}

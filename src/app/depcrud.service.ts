import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


import { Observable } from 'rxjs';

import { Department } from './department';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DepcrudService {
  url = 'http://i875395.hera.fhict.nl/api/388789/department';
  constructor(private http: HttpClient) { 
  }

  addDepa (dep: Department): Observable<Department> {
    return this.http.post<Department>(this.url, dep, httpOptions)
      .pipe(
      );
  }

  deleteDepa (id: number): Observable<{}> {
    const delurl = `${this.url}?id=${id}`; 
    return this.http.delete(delurl, httpOptions)
      .pipe(
      );
  }

  updateDepa (dep: Department): Observable<Department> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'my-new-auth-token');
      const updurl = `${this.url}?id=${dep.id}`; 

    return this.http.put<Department>(updurl, dep, httpOptions)
      .pipe(
      );
  }
}


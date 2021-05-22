import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService extends DataService {

  constructor(http: Http) {
    super("http://i875395.hera.fhict.nl/api/388789/department", http);
  }
  
}

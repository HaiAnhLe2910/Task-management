import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from './employee';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  }
)
};
@Injectable({
  providedIn: 'root'
})
export class EmService {
  private employeesURL = 'http://i875395.hera.fhict.nl/api/388789/employee';
  constructor(private http: HttpClient,private messageService:MessageService) { }

  //** POST: add a new employee to the server */
  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.employeesURL, employee, httpOptions).pipe(
      tap((employee: Employee) => this.log(`added employee w/id=${employee.id}`)),
      catchError(this.handleError<Employee>('addEmployee'))
    );
  }

  //** PUT: update the employee on the server */
  updateEmployee(employee: Employee): Observable<Employee> {
    httpOptions.headers =
    httpOptions.headers.set('Authorization', 'my-new-auth-token');
    const updurl = `${this.employeesURL}?id=${employee.id}`; 
    return this.http.put<Employee>(updurl, employee,httpOptions).pipe(
      tap(_ => this.log(`updated employee id=${employee.id}`)),
      catchError(this.handleError<Employee>('updateEmployee'))
    );
  }

  //** DELETE: remove the employee from the server */
  removeEmployee(employee: Employee | number): Observable<Employee> {
    const id = typeof employee == 'number' ? employee : employee.id;
    const url = `${this.employeesURL}?id=${id}`;
    return this.http.delete<Employee>(url, httpOptions).pipe(
      tap(_ => this.log(`delete employee id=${id}`)),
      catchError(this.handleError<Employee>('removeEmployee'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }


  private log(message: string) {
    this.messageService.add(`EmpService: ${message}`);
  }

}


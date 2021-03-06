import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends DataService {


  constructor(http: Http) {
    super('http://i875395.hera.fhict.nl/api/388789/employee', http);
  }
    
  // getEmployees(): Observable<Employee[]> {
  //   return this.http.get<Employee[]>(this.employeesURL).pipe(
  //     tap(Employees => this.log('fetched employees')),
  //     catchError(this.handleError('getEmployees', []))
  //   );
  // }

  /** GET employee by id. Will 404 if id not found */
// getEmployee(id: number): Observable<Employee> {
//   const url = `${this.employeesURL}/${id}`;
//   return this.http.get<Employee>(url).pipe(
//     tap(_ => this.log(`fetched employee id=${id}`)),
//     catchError(this.handleError<Employee>(`getEmployee id=${id}`))
//   );
// }

//   /** POST: add a new employee to the server */
//   addEmployee(employee: Employee): Observable<Employee> {
//     return this.http.post<Employee>(this.employeesURL, employee, httpOptions).pipe(
//       tap((employee: Employee) => this.log(`added employee w/id=${employee.id}`)),
//       catchError(this.handleError<Employee>('addEmployee'))
//     );
//   }

//   /** DELETE: remove the employee from the server */
//   removeEmployee(employee: Employee | number): Observable<Employee> {
//     const id = typeof employee == 'number' ? employee : employee.id;
//     const url = `${this.employeesURL}/${id}`;
//     return this.http.delete<Employee>(url, httpOptions).pipe(
//       tap(_ => this.log(`delete employee id=${id}`)),
//       catchError(this.handleError<Employee>('removeEmployee'))
//     );
//   }

//   /** PUT: update the employee on the server */
  // updateEmployee(employee: Employee): Observable<any> {
  //   return this.http.put(this.employeesURL, employee).pipe(
  //     tap(_ => this.log(`updated employee id=${employee.id}`)),
  //     catchError(this.handleError<Employee>('updateEmployee'))
  //   );
  // }

  
  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //     this.log(`${operation} failed: ${error.message}`);
  //     return of(result as T);
  //   };
  // }


  // private log(message: string) {
  //   this.messageService.add(`EmployeeService: ${message}`);
  // }

}
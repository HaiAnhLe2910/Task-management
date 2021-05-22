import { Injectable } from '@angular/core';
import {Task} from './tasks';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { DataService } from './data.service';
import { Http } from '@angular/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TaskService extends DataService {
  constructor(http: Http) { 
    super('http://i875395.hera.fhict.nl/api/388789/task', http);
   }
   
  // getTasks(): Observable<Task[]> {
  //   return this.http.get<Task[]>(this.tasksUrl)
  //   .pipe(
  //     catchError(this.handleError('getTasks', []))
  //   );
  // }
  // updateTask (task: Task): Observable<any> {
  //   return this.http.put(this.tasksUrl, task, httpOptions).pipe(
  //     tap(_ => this.log(`updated task id=${task.id}`)),
  //     catchError(this.handleError<any>('updateTask'))
  //   );
  // }

  // methods
  // getTask(id: number): Observable<Task> {
  //   const url ='${this.tasksUrl}/${id}';
  //   return this.http.get<Task>(url).pipe(
  //     tap(_ => this.log('fetched task id =${id}')),
  //     catchError(this.handleError<Task>('getTask id=${id}'))
  //   );
  // }
  // private log(message: string) {
  //   this.messageService.add(`TaskService: ${message}`);
  // }
  // department_Id, name, employeeId, date
  /*addTask (task: Task): Observable<Task> {
    return this.http.post<Task>(this.tasksUrl, task, httpOptions).pipe(
      tap((task: Task) => this.log(`added task w/ id=${task.id}`)),
      catchError(this.handleError<Task>('addTask'))
    );
  }*/
  // id: number, department_Id: number, name: string, employeeId: number[], date: Date
//   addTask (task: Task): Observable<Task> {
//     return this.http.post<Task>(this.tasksUrl, task, httpOptions).pipe(
//       tap((task: Task) => this.log(`added task w/ id=${task.id}`)),
//       catchError(this.handleError<Task>('addTask'))
//     );
//   }
//   deleteTask (task: Task | number): Observable<Task> {
//     const id = typeof task === 'number' ? task : task.id;
//     const url = `${this.tasksUrl}/${id}`;
  
//     return this.http.delete<Task>(url, httpOptions).pipe(
//       tap(_ => this.log(`deleted task id=${id}`)),
//       catchError(this.handleError<Task>('deleteTask'))
//     );
//   }
//   private handleError<T> (operation = 'operation', result?: T) {
//     return (error: any): Observable<T> => {
   
//       // TODO: send the error to remote logging infrastructure
//       console.error(error); // log to console instead
   
//       // TODO: better job of transforming error for user consumption
//       this.log(`${operation} failed: ${error.message}`);
   
//       // Let the app keep running by returning an empty result.
//       return of(result as T);
//     };
    
//   }
//   searchTasks(term: string): Observable<Task[]> {
//     if (!term.trim()) {
//       // if not search term, return empty tasks array.
//       return of([]);
//     }
//     return this.http.get<Task[]>(`${this.tasksUrl}/?name=${term}`).pipe(
//       tap(_ => this.log(`found tasks matching "${term}"`)),
//       catchError(this.handleError<Task[]>('searchTasks', []))
//     );
//   }
 }

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from './tasks';

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
export class TasksService {
  private tasksUrl = 'http://i875395.hera.fhict.nl/api/388789/task';
  constructor(private http: HttpClient) { }

  //** POST: add a new employee to the server */
  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.tasksUrl,task, httpOptions).pipe(
    );
  }

  //** PUT: update the employee on the server */
  updateTask(task: Task): Observable<Task> {
    httpOptions.headers =
    httpOptions.headers.set('Authorization', 'my-new-auth-token');
    const updurl = `${this.tasksUrl}?id=${task.id}`; 
    return this.http.put<Task>(updurl, task,httpOptions).pipe(
    );
  }

  //** DELETE: remove the task from the server */
  removeTask(task: Task | number): Observable<Task> {
    const id = typeof task == 'number' ? task : task.id;
    const url = `${this.tasksUrl}?id=${id}`;
    return this.http.delete<Task>(url, httpOptions).pipe(
    );
  }



}




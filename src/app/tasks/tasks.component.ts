import { Component, OnInit } from '@angular/core';
import { Task } from '../tasks';
import { TaskService } from '../task.service';
import { FilterPipe } from 'ngx-filter-pipe';
import { Employee } from '../employee';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { DepartmentService} from '../department.service';
import {EmployeeService} from '../employee.service';
import { TasksService } from '../tasks.service';


@Component({
  selector: 'app-tasks', 
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {
  tasks : Task[];
  selectedTask: Task;

  TaskFilter: any={name:''};
  constructor(private tasksService:TasksService,private taskService: TaskService,private depService: DepartmentService,private empService:EmployeeService,private filterPipe: FilterPipe,private modalService: NgbModal) { 
    // filterPipe.transform(this.tasks,{name:''})
  }

  ngOnInit() {
    this.getTasks();
  }

  // methods

  open1(edit) {
    this.modalService.open(edit);
  }
  open2(remove)
  {
    this.modalService.open(remove);
  }
  open3(create)
  {
    this.modalService.open(create);
  }
  onSelect(task: Task): void {
    this.selectedTask = task;
  }

  getTasks(): void{
    this.taskService.get()
    .subscribe((response) => this.tasks = response);
  }
  removeIt() {

    this.tasks.splice(this.tasks.indexOf(this.selectedTask),1);
    this.tasks.slice();
    this.tasksService.removeTask(this.selectedTask.id).subscribe();
    this.selectedTask=null;
  }
  add(department_id:number, name: string, employees: Employee[]): void {
    name = name.trim();
    if (!name) { return; }
    this.tasksService.addTask({department_id,name,employees} as Task).subscribe(task=>this.tasks.push(task));
  }
  update(department_id:number, name: string, employees: Employee[]): void {
    //this.tasks[this.tasks.indexOf(this.selectedTask)].id=id;
    this.tasks[this.tasks.indexOf(this.selectedTask)].department_id=department_id;
    this.tasks[this.tasks.indexOf(this.selectedTask)].name=name;
    this.tasks[this.tasks.indexOf(this.selectedTask)].employees=employees;
    if (this.selectedTask) {
      this.tasksService.updateTask(this.selectedTask)
        .subscribe(task => {
          // replace the hero in the heroes list with update from server
          const ix = task ? this.tasks.findIndex(h => h.id === task.id) : -1;
          if (ix > -1) { this.tasks[ix] = task; }
        });
      
    }
    this.selectedTask = null;
  }


}

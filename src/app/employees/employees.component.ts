import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { FilterPipe } from 'ngx-filter-pipe';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { EmService } from '../em.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  title = 'Employee List';
  employees: Employee[];
  selectedEmployee: Employee;

  EmployeeFilter: any={last_name:''};
 
  constructor(private emService:EmService,private employeeService: EmployeeService,private filterPipe: FilterPipe,private modalService: NgbModal) 
  {
     filterPipe.transform(this.employees,{last_name:''})
  }

  ngOnInit() {
    this.getEmployees();
  }
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
  onSelect(employee: Employee): void {
    this.selectedEmployee = employee;
  }

  add(first_name:string, last_name: string,department_id: number) {
    last_name = last_name.trim();
    first_name=first_name.trim();
    if (!last_name||!first_name) { return; }
    this.emService.addEmployee({first_name,last_name,department_id } as Employee)
      .subscribe(employee => {
        this.employees.push(employee);
      });
  }
  
  removeIt() {
    this.employees.splice(this.employees.indexOf(this.selectedEmployee),1);
    this.employees.slice();
    this.emService.removeEmployee(this.selectedEmployee.id).subscribe();
    this.selectedEmployee=null;
  }

  getEmployees(): void {
    this.employeeService.get()
    .subscribe(
      (response) => this.employees = response
    )
  }

  update(first_name:string,last_name:string,department_id:number) {
    this.employees[this.employees.indexOf(this.selectedEmployee)].first_name=first_name;
    this.employees[this.employees.indexOf(this.selectedEmployee)].last_name=last_name;
    this.employees[this.employees.indexOf(this.selectedEmployee)].department_id=department_id;
    if(this.selectedEmployee)
    {
    this.emService.updateEmployee(this.selectedEmployee)
      .subscribe(emp=>{
        // replace the employee in the employees list with update from server
        const ix = emp ? this.employees.findIndex(h => h.id === emp.id) : -1;
        if (ix > -1) { this.employees[ix] = emp; }
      }
);
    }
    
    this.selectedEmployee=null;
  }
}

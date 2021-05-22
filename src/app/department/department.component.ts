import { Component, OnInit } from '@angular/core';
import { Department } from '../department';
import { DepartmentService } from '../department.service';
import { FilterPipe } from 'ngx-filter-pipe';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DepcrudService } from '../depcrud.service';
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css' /*'../app.component.css'*/]
})
export class DepartmentComponent implements OnInit {
  depas: Department[];
  selectedDepa: Department;
  depFilter: any = { name: ''};
  constructor(private DepcrudService : DepcrudService,private DepService: DepartmentService, private filterPipe: FilterPipe, private modalService: NgbModal) {
    
   }
  ngOnInit() {
    this.getDep();
  }
  
  onSelect(depa: Department): void {
    this.selectedDepa = depa;
  }

  getDep(): void {
    this.DepService.get()
      .subscribe(
        (response) => this.depas = response
      )
  }

  addDep(name: string, building: string)
  {
    this.DepcrudService.addDepa({name,building} as Department).subscribe(dep => this.depas.push(dep));
    
  }

  update(name: string, building: string)
  {
    //this.depas[this.depas.indexOf(this.selectedDepa)].id = id;
    this.depas[this.depas.indexOf(this.selectedDepa)].name = name;
    this.depas[this.depas.indexOf(this.selectedDepa)].building = building;
    if (this.selectedDepa) {
      this.DepcrudService.updateDepa(this.selectedDepa)
        .subscribe(dep => {
          // replace the hero in the heroes list with update from server
          const ix = dep ? this.depas.findIndex(h => h.id === dep.id) : -1;
          if (ix > -1) { this.depas[ix] = dep; }
        });
      
    }
    this.selectedDepa = null;
  }
    
  
  delete()
  {
    this.depas.splice(this.depas.indexOf(this.selectedDepa), 1);
    this.DepcrudService.deleteDepa(this.selectedDepa.id).subscribe();
    this.depas.slice();
    this.selectedDepa = null;
    
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

}

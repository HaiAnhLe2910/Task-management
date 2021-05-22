import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { MessageComponent } from './message/message.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule }    from '@angular/common/http';
import { HttpModule }    from '@angular/http';
import { DataService } from './data.service';
import { DepartmentService } from './department.service';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
  { path: 'department', component: DepartmentComponent},
  { path: 'task', component: TasksComponent},
  { path: 'employee', component: EmployeesComponent},
  { path: '', redirectTo:'',pathMatch: 'full',component: HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeDetailComponent,
    MessageComponent,
    TasksComponent,
    DepartmentComponent,
    TaskDetailComponent,
    MessagesComponent,
    HomeComponent,
  
    
  ],
  imports: [
    [NgbModule],
    BrowserModule,
    FormsModule,
    HttpModule,   
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
      
    ),

  
    
    
    FilterPipeModule,
    NgbModule
  ],
  providers: [
    DepartmentService,
    HttpModule,
    FilterPipeModule,
    NgbModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

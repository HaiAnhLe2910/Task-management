import { Component } from '@angular/core';

//import { Department } from './department';
@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <h1 style="text-align:center;margin-bottom:50px;margin-top: 20px;color: black;font-family: Arial, Helvetica, sans-serif;
  font-size: 250%;">Welcome to Web2</h1>
  
  

  
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  //title = 'Department';
}

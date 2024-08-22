import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { IEmployee } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public employees:any;
  
  constructor(private _emploeeService: EmployeeServiceService){}

  ngOnInit()  {
    this.employees = this._emploeeService.getEmployees();
      
  }

}

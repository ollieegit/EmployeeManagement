import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from './../../services/employee.service'
@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  allemployeeData: Employee[];
  constructor(private _employeeService: EmployeeService, private _router: Router) { }

  ngOnInit(): void {
    this.GetAllEmployees();
  }
  GetAllEmployees() {
    this.allemployeeData = this._employeeService.GetAllEmployees();
  }
  DeleteEmployee(userid: string) {
    if (confirm("Are you sure you want to delete the record???")) {
      let isDeleted = this._employeeService.DeleteEmployee(Number(userid));
      if (isDeleted) {
        alert("The employee has been deleted successfully..");
      }
      else {
        alert("Deletion Unsuccessfull..");
      }
    }
  }
  // CreateEmployee(empData: Employee) {
  //   let lastentry = this._employeeService.GetMaxIndexForEntry();
  //   if (empData) {
  //     empData.id = (lastentry + 1);
  //     this._employeeService.AddEmployee(empData);

  //   }
  // }
  // UpdateEmployee(empData: Employee) {
  //   if (empData) {
  //     this._employeeService.AddEmployee(empData);

  //   }
  // }
}

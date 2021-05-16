import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from './../../services/employee.service'
import { ActivatedRoute, Router } from '@angular/router';// for getting data from params
@Component({
  selector: 'app-employeeoperations',
  templateUrl: './employeeoperations.component.html',
  styleUrls: ['./employeeoperations.component.css']
})
export class EmployeeoperationsComponent implements OnInit {

  employeeID: number;
  employee: Employee;
  departments = ["Manager", "Developer", "QA", "BA"];
  areErrorsPresent = false;
  constructor(private _employeeService: EmployeeService, private _route: ActivatedRoute,
    private _navroute: Router) { }

  ngOnInit(): void {
    let paramID = this._route.snapshot.paramMap.get('id');
    if (paramID) {
      this.employeeID = Number(paramID);
      this.employee = this._employeeService.GetEmployeeById(this.employeeID);
    }
    else {
      this.employeeID = 0;
      this.employee = new Employee(0, "", "", "Female", "default");
    }
  }
  onblurdata(data) {
    if (data == 'default') {
      this.areErrorsPresent = true;
    }
    else {
      this.areErrorsPresent = false;
    }
  }
  // to be called when you employee data is updated or called
  OnSubmit() {
    if (this.employee && !this.areErrorsPresent && this.employee.gender) {
      if (this.employeeID != 0) {
        this.UpdateEmployee(this.employee);
      }
      else {

        this.CreateEmployee(this.employee);
      }

    }
    this._navroute.navigate(['/']);
  }
  CreateEmployee(empData: Employee) {
    let lastentry = this._employeeService.GetMaxIndexForEntry();
    if (empData) {
      empData.id = (lastentry + 1);
      let success = this._employeeService.AddEmployee(empData);
      if (success) {
        alert('Employee Details Saved Successfully!')
      }
      else {
        alert('Error in saving employee details');
      }

    }
  }
  UpdateEmployee(empData: Employee) {
    if (empData) {
      let success = this._employeeService.UpdateEmployeeDetails(empData);
      if (success) {
        alert('Employee Details Updated Successfully!');
      }
      else {
        alert('Error in updating employee details');
      }
    }
  }
}

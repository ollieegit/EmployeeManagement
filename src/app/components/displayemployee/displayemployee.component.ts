import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from './../../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-displayemployee',
  templateUrl: './displayemployee.component.html',
  styleUrls: ['./displayemployee.component.css']
})
export class DisplayemployeeComponent implements OnInit {
  employeeID: number;
  employee: Employee;
  constructor(private _employeeService: EmployeeService, private _route: ActivatedRoute,
    private _navroute: Router) { }

  ngOnInit(): void {
    let paramID = this._route.snapshot.paramMap.get('id');
    if (paramID) {
      this.employeeID = Number(paramID);
      this.employee = this._employeeService.GetEmployeeById(this.employeeID);
    }
  }

}

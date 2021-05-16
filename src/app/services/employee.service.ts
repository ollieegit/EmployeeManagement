import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // dummy list to save employees data
  employeeList: Employee[] = [
    {
      "id": 1,
      "firstname": "ABC",
      "lastname": "ABC",
      "dateofbirth": new Date("02-09-1995"),
      "gender": "Male",
      "department": "Developer"
    },
    {
      "id": 2,
      "firstname": "DEF",
      "lastname": "DEF",
      "dateofbirth": new Date("02-10-1995"),
      "gender": "Other",
      "department": "QA"
    },
    {
      "id": 3,
      "firstname": "Test",
      "lastname": "Test",
      "dateofbirth": new Date("02-03-1995"),
      "gender": "Female",
      "department": "Manager"
    },
    {
      "id": 4,
      "firstname": "Testing",
      "lastname": "Testing",
      "dateofbirth": new Date("02-03-1995"),
      "gender": "Male",
      "department": "BA"
    }
  ];

  // for getting the whole list of employees
  GetAllEmployees(): Employee[] {
    return this.employeeList;
  }

  GetEmployeeById(id: number) {
    return this.employeeList.find(x => x.id == id);
  }

  // for creating or adding a new employee
  AddEmployee(employee: Employee) {
    if (employee) {
      employee.id = this.GetMaxIndexForEntry() + 1;
      this.employeeList.push(employee);
      return true;
    }
    return false;
  }

  //Updating information for employee
  UpdateEmployeeDetails(employee: Employee) {
    let emp = this.GetEmployeeById(employee.id);
    if (emp) {
      emp.firstname = employee.firstname;
      emp.lastname = employee.lastname;
      emp.dateofbirth = employee.dateofbirth;
      emp.gender = employee.gender;
      emp.department = employee.department;
      return true;
    }
    return false;
  }
  //delete the details of the employee
  DeleteEmployee(id: number) {
    let currentEmployee = this.GetEmployeeById(id);
    if (currentEmployee) {
      let index = this.employeeList.indexOf(currentEmployee, 0);
      if (index > -1) {
        this.employeeList.splice(index, 1);
        return true;
      }
    }
    return false;
  }
  // creating in order to find max number present in the list
  GetMaxIndexForEntry() {
    if (this.employeeList) {
      return (this.employeeList[this.employeeList.length - 1].id);
    }
    return 0;
  }
}

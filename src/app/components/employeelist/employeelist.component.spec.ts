import { DebugElement } from '@angular/core';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { EmployeeService } from 'src/app/services/employee.service';

import { EmployeelistComponent } from './employeelist.component';

fdescribe('EmployeelistComponent', () => {
  let component: EmployeelistComponent;
  let fixture: ComponentFixture<EmployeelistComponent>;
  let service: EmployeeService;
  let debugElement: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeelistComponent],
      providers: [EmployeeService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeelistComponent);

    service = TestBed.inject(EmployeeService);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
    spyOn(window, 'alert');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('injection checking', () => {
    expect(service instanceof EmployeeService).toBeTruthy();
  });
  it('Dependency Injection working ', inject([EmployeeService], (injectionservice: EmployeeService) => {
    expect(injectionservice).toBeTruthy();
    expect(injectionservice instanceof EmployeeService).toBeTruthy();

  }))
  it('Is DeleteEmployee working when confirm is rejected', () => {
    spyOn(window, 'confirm').and.returnValue(false);

    component.DeleteEmployee('');
    expect(window.alert).toHaveBeenCalledWith('Delete Rejected');
  })
  it('Is DeleteEmployee working when confirm is accepted but employee data is not present', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    //spyOn(window, 'alert');
    spyOn(service, "DeleteEmployee").and.returnValue(false);
    component.DeleteEmployee('35');
    expect(window.alert).toHaveBeenCalledWith('Deletion Unsuccessfull..');
  })
  it('Is DeleteEmployee working when confirm is accepted but employee data is present', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    spyOn(service, "DeleteEmployee").and.returnValue(true);
    component.DeleteEmployee('1');
    expect(window.alert).toHaveBeenCalledWith('The employee has been deleted successfully..');
  })
  it('Is DeleteEmployee working as a whole.', () => {
    spyOn(window, 'confirm').and.returnValues(false, true, true);
    //spyOn(window, 'alert');
    spyOn(service, "DeleteEmployee").and.returnValues(false, true);
    component.DeleteEmployee('');
    expect(window.alert).toHaveBeenCalledWith('Delete Rejected');
    component.DeleteEmployee('35');
    expect(window.alert).toHaveBeenCalledWith('Deletion Unsuccessfull..');
    component.DeleteEmployee('1');
    expect(window.alert).toHaveBeenCalledWith('The employee has been deleted successfully..');
  })
  it("Should check first row in template", () => {

    let obj = [{
      "id": 25,
      "firstname": "TestUser",
      "lastname": "TestUser",
      "dateofbirth": new Date("02-10-1995"),
      "gender": "Other",
      "department": "QA"
    }];
    component.allemployeeData = obj;
    fixture.detectChanges();
    let fname = debugElement.query(By.css("#fname_0"))
    let lname = debugElement.query(By.css("#lname_0"))
    let dname = debugElement.query(By.css("#dname_0"))
    expect(fname.nativeElement.innerText).toEqual("TestUser")
    expect(lname.nativeElement.innerText).toEqual("TestUser")
    expect(dname.nativeElement.innerText).toEqual("QA")
  })
  it("Should click delete for first row in template", () => {

    let obj = [{
      "id": 25,
      "firstname": "TestUser",
      "lastname": "TestUser",
      "dateofbirth": new Date("02-10-1995"),
      "gender": "Other",
      "department": "QA"
    }];
    component.allemployeeData = obj;
    service.employeeList = obj;
    fixture.detectChanges();
    spyOn(window, 'confirm').and.returnValue(true);
    let bname = debugElement.query(By.css("#bdel_0"));
    bname.triggerEventHandler('click', {});
    expect(window.alert).toHaveBeenCalledWith('The employee has been deleted successfully..');
    expect(service.employeeList.length).toEqual(0);
  })
});

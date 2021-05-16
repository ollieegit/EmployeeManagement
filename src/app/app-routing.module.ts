import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
import { EmployeeoperationsComponent } from './components/employeeoperations/employeeoperations.component';
import { DisplayemployeeComponent } from './components/displayemployee/displayemployee.component';


const routes: Routes = [
  { path: "", component: EmployeelistComponent },
  { path: "upsert/:id", component: EmployeeoperationsComponent },
  { path: "upsert", component: EmployeeoperationsComponent },
  { path: "display/:id", component: DisplayemployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

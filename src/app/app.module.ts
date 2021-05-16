import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
import { EmployeeoperationsComponent } from './components/employeeoperations/employeeoperations.component';
import { FormsModule } from '@angular/forms';
import { DisplayemployeeComponent } from './components/displayemployee/displayemployee.component'
@NgModule({
  declarations: [
    AppComponent,
    EmployeelistComponent,
    EmployeeoperationsComponent,
    DisplayemployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

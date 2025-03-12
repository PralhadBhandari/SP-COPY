import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeDetailsRoutingModule } from './employee-details-routing.module';
import { EmpolyeeMainscreenComponent } from './conponents/empolyee-mainscreen/empolyee-mainscreen.component';
import { EmployeeSummaryComponent } from './conponents/employee-summary/employee-summary.component';


@NgModule({
  declarations: [
    EmpolyeeMainscreenComponent,
    EmployeeSummaryComponent
  ],
  imports: [
    CommonModule,
    EmployeeDetailsRoutingModule
  ]
})
export class EmployeeDetailsModule { }

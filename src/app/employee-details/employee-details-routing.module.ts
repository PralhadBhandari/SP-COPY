import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpolyeeMainscreenComponent } from './conponents/empolyee-mainscreen/empolyee-mainscreen.component';

const routes: Routes = [
  { path: '', component: EmpolyeeMainscreenComponent,
  //  children: [
  //   { path: 'sow-test', component: SowTestComponent },
  //   { path: 'sow-summary', component: SowSummaryComponent },
  //   { path: 'identifiers', component: IdentifierComponent },
  //   { path: 'boi', component: BoiComponent },
  //   { path: 'chart', component: ChartComponent },
  //   { path: 'validations', component: ValidationsComponent },
  //   { path: '', redirectTo: 'sow-test', pathMatch: 'full' }
  // ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeDetailsRoutingModule { }

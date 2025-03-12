import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SowMainscreenComponent } from './sow-mainscreen/sow-mainscreen.component';
import { SowTestComponent } from './sow-test/sow-test.component';
import { SowSummaryComponent } from './sow-summary/sow-summary.component';
import { IdentifierComponent } from './identifier/identifier.component';
import { BoiComponent } from './boi/boi.component';
import { ChartComponent } from './chart/chart.component';
import { ValidationsComponent } from './validations/validations.component';

const routes: Routes = [
  { path: '', component: SowMainscreenComponent,
   children: [
    { path: 'sow-test', component: SowTestComponent },
    { path: 'sow-summary', component: SowSummaryComponent },
    { path: 'identifiers', component: IdentifierComponent },
    { path: 'boi', component: BoiComponent },
    { path: 'chart', component: ChartComponent },
    { path: 'validations', component: ValidationsComponent },
    { path: '', redirectTo: 'sow-test', pathMatch: 'full' }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SowModRoutingModule { }

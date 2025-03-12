import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SowModRoutingModule } from './sow-mod-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SowMainscreenComponent } from './sow-mainscreen/sow-mainscreen.component';
import { SowTestComponent } from './sow-test/sow-test.component';
import { SowSummaryComponent } from './sow-summary/sow-summary.component';
import { RouterModule } from '@angular/router';
import { NbAccordionModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbIconModule, NbInputModule, NbLayoutModule, NbMenuModule, NbOptionModule, NbSelectModule, NbSidebarModule, NbSpinnerModule, NbToggleModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../task-module/components/navbar/navbar.component';
import { SowComponent } from './sow/sow.component';
import { IdentifierComponent } from './identifier/identifier.component';
import { NumberDirective } from './sow-test/only-number.directive';
import { BoiComponent } from './boi/boi.component';
import { ChartComponent } from './chart/chart.component';
import { ValidationsComponent } from './validations/validations.component';


@NgModule({
  declarations: [SowTestComponent, SowSummaryComponent, SowMainscreenComponent,
    // NavbarComponent,
    // SowComponent,
    SidebarComponent, NumberDirective,
    IdentifierComponent,
    BoiComponent,
    ChartComponent,
    ValidationsComponent ],
  imports: [
    RouterModule.forChild([
      // { path: '', component: SowMainscreenComponent, children: [
      //   { path: 'sow-test', component: SowTestComponent },
      //   { path: 'sow-summary', component: SowSummaryComponent },
      //   { path: '', redirectTo: 'sow-test', pathMatch: 'full' }
      // ]},
    ]),
    CommonModule,
    SowModRoutingModule,
    NbIconModule,
    NbSpinnerModule,
    NbMenuModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbLayoutModule,
    NbCardModule,
    NbSelectModule,
    NbOptionModule,
    FormsModule,
    NbButtonModule,
    NbInputModule,
    NbCheckboxModule,
    NbAccordionModule,
    NbToggleModule

  ]
})
export class SowModModule { }

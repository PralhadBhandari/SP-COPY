import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskModuleRoutingModule } from './task-module-routing.module';
import { NbAccordionModule, NbCardModule, NbIconModule, NbLayoutModule, NbListModule, NbThemeModule, NbTooltipModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { NbEvaIconsModule } from '@nebular/eva-icons';


@NgModule({
  declarations: [


  ],

  imports: [
    CommonModule,
    TaskModuleRoutingModule,
    NbLayoutModule,
    FormsModule,
    NbThemeModule.forRoot(),
    NbCardModule,
    NbListModule,
    NbAccordionModule,
    NbIconModule,
    NbEvaIconsModule,
    NbTooltipModule,
  ]
})

export class TaskModuleModule { }

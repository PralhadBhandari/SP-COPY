import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NbAccordionModule, NbButtonGroupModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbFormFieldModule, NbIconModule, NbInputModule, NbListModule, NbMenuModule, NbSelectModule, NbSidebarModule, NbSpinnerModule, NbThemeModule, NbTooltipModule } from '@nebular/theme';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  NbLayoutModule  } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskModuleModule } from './task-module/task-module.module';
import { TaskModuleRoutingModule } from './task-module/task-module-routing.module';
import { MainCardComponent } from './task-module/components/main-card/main-card.component';
import { MainCardService } from './services/main-card.service';
import { FilterComponent } from './task-module/components/filter/filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimalInfoComponent } from './task-module/components/animal-info/animal-info.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginpageComponent } from './task-module/components/loginpage/loginpage.component';
import { NavbarComponent } from './task-module/components/navbar/navbar.component';
import { RedirectpageComponent } from './task-module/components/redirectpage/redirectpage.component';
import { RegisterpageComponent } from './task-module/components/registerpage/registerpage.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { TextFieldModule } from '@angular/cdk/text-field';
import {MatCardModule} from '@angular/material/card';
import { SpMenuComponent } from './task-module/components/sp-menu/sp-menu.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ConfiguratorComponent } from './configurator/configurator.component';


@NgModule({
  declarations: [
    AppComponent,
    MainCardComponent,
    FilterComponent,
    AnimalInfoComponent,
    LoginpageComponent,
    NavbarComponent,
    RedirectpageComponent,
    RegisterpageComponent,
    SpMenuComponent,
    ConfiguratorComponent

    ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbCardModule,
    NbListModule,
    NbAccordionModule,
    NbIconModule,
    NbEvaIconsModule,
    TaskModuleModule,
    TaskModuleRoutingModule,
    NbInputModule,
    NbTooltipModule,
    NbCheckboxModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NbMenuModule,
    NbFormFieldModule,
    ReactiveFormsModule,
    NbButtonGroupModule,
    NbButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    TextFieldModule,
    MatCardModule,
    NbSelectModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    NbSpinnerModule

  ],
  providers: [MainCardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

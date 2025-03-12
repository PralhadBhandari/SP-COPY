import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedirectpageComponent } from './components/redirectpage/redirectpage.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { MainCardComponent } from './components/main-card/main-card.component';
import { RegisterpageComponent } from './components/registerpage/registerpage.component';
import { AuthGuard } from '../services/auth.guard';


const routes: Routes = [
  // , canActivate: [AuthGuard] 
  { path: 'register', component: RegisterpageComponent },
  { path: 'home', component: RedirectpageComponent },
  { path: 'opportunities', component: MainCardComponent},
  { path: 'products', component: RedirectpageComponent },
  { path: 'about', component: RedirectpageComponent },
  { path: 'contact', component: RedirectpageComponent },
  { path: 'login', component: LoginpageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskModuleRoutingModule { }

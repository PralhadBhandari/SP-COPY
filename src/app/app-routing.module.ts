import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedirectpageComponent } from './task-module/components/redirectpage/redirectpage.component';
import { LoginpageComponent } from './task-module/components/loginpage/loginpage.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {  path: 'user',
  loadChildren: () => import('./task-module/task-module.module').then(m => m.TaskModuleModule)
},
{  path: 'sow',
loadChildren: () => import('./sow-mod/sow-mod.module').then(m => m.SowModModule)
},
// {  path: 'employee',
// loadChildren: () => import('./empolyee-details/empolyee-details.module').then(m => m.EmployeeDetailsModule)
// },
{  path: 'configurator', 
loadChildren: () => import('./configurator/configurator.module').then(m => m.ConfiguratorModule)
}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

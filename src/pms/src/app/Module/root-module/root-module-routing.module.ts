import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserlistComponent } from 'src/app/Components/userlist/userlist.component';
import { DashboardComponent } from 'src/app/Components/dashboard/dashboard.component';
import { ProjectListComponent } from 'src/app/Components/project-list/project-list.component';
import { DepartmentListComponent } from 'src/app/Components/department-list/department-list.component';
import { LoginComponent } from 'src/app/Layout/login/login.component';
import { MainComponent } from 'src/app/Layout/main/main.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:'app',component:MainComponent,
  children:[
    {path:'dashboard',component:DashboardComponent},
    {path:"employee",component:UserlistComponent},
    {path:"project",component:ProjectListComponent},
    {path:"department",component:DepartmentListComponent},

  ]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RootModuleRoutingModule { }

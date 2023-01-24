import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootModuleRoutingModule } from './root-module-routing.module';
import { MainComponent } from 'src/app/Layout/main/main.component';
import { MenuItemComponent } from 'src/app/Layout/menu-item/menu-item.component';
import { TopmenuComponent } from 'src/app/Layout/topmenu/topmenu.component';
import { LoginComponent } from 'src/app/Layout/login/login.component';
import { TopNavComponent } from 'src/app/Layout/top-nav/top-nav.component';
import { MenuListItemComponent } from 'src/app/Layout/menu-list-item/menu-list-item.component';
import { GridDataModule } from 'src/app/Shared/grid-data/grid-data.module';
import { CustomMaterialModule } from '../custom-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserlistComponent } from 'src/app/Components/userlist/userlist.component';
import { DashboardComponent } from 'src/app/Components/dashboard/dashboard.component';
import { ProjectListComponent } from 'src/app/Components/project-list/project-list.component';
import { DepartmentListComponent } from 'src/app/Components/department-list/department-list.component';


@NgModule({
  declarations: [
    MainComponent,
    MenuItemComponent,
    TopmenuComponent,
    LoginComponent,
    TopNavComponent,
    MenuListItemComponent,
    UserlistComponent,
    DashboardComponent,
    ProjectListComponent,
    DepartmentListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RootModuleRoutingModule,
    CustomMaterialModule,
    GridDataModule,
    ReactiveFormsModule,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class RootModuleModule { }

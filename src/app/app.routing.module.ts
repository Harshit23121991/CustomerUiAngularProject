import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from './user/user.component';
import {LoginComponent} from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
{ path: 'user', component: UserComponent },
{ path: 'login', component: LoginComponent },
{ path: 'employee', component: EmployeeComponent },
{ path: 'dashboard', component: DashboardComponent },
{ path: 'details', component: DetailsComponent },
{path : '', component : DashboardComponent}
];

@NgModule({
imports: [
RouterModule.forRoot(routes)
],

exports: [
RouterModule
],

declarations: []
})

export class AppRoutingModule { }
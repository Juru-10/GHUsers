import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule,Routes} from '@angular/router';

import {UserDetailsComponent} from '../user-details.component';

import { UserComponent } from '../user/user.component';
import { AboutComponent } from '../about/about.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const routes:Routes=[
  {path:"users",component:UserComponent},
  {path:"about",component:AboutComponent},
  {path:"",redirectTo:"/users",pathMatch:"full"},
  {path:'users/:id',component:UserDetailsComponent},
  {path:'**',component:NotFoundComponent}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
})
export class RoutingModule { }

import {RoutingModule} from './routing/routing.module'

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms'
import {AlertsService} from './alert-service/alerts.service';
import {HttpClientModule} from '@angular/common/http';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { FormComponent } from './form/form.component';

const routes:Routes=[
  {path:"users",component:UserComponent},
  {path:"about",component:AboutComponent},
  {path:"",redirectTo:"/users",pathMatch:"full"},
  {path:'**',component:NotFoundComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    NotFoundComponent,
    UserDetailsComponent,
    StrikethroughDirective,
    DateCountPipe,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RoutingModule,
    HttpClientModule,
    // NgProgressModule.forRoot(),// normal progress bar
    NgProgressHttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AlertsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

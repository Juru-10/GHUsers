import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { rcomponents } from '../routing/routing.module';
// import { AboutComponent } from '../about/about.component';

const routes: Routes = [
//   {path:"user",component:UserComponent},
//   {path:"about",component:AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

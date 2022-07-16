import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuditsComponent } from './components/audits/audits.component';


const routes: Routes = [
  {
    path:'',
    component:AppComponent
  },
  {
    path:'audits',
    pathMatch:'full',
    component:AuditsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

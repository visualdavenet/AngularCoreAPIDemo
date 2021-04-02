import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { StartupComponent } from './startup/startup.component';

const routes: Routes = [
  {path:'', redirectTo: 'startup', pathMatch: 'full'},
  {path:'home', component:HomeComponent},
  {path:'card', component:CardComponent},
  {path:'startup', component:StartupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

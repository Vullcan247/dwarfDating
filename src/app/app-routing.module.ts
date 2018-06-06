import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SparkComponent } from './spark/spark.component';

const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
{ path: "home", component: HomeComponent },
{ path: "spark", component: SparkComponent },
{ path: "profile", component: ProfileComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

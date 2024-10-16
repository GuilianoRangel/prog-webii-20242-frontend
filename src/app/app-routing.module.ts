import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./core/home/home.component";
import {categoryRoutes} from "./pages/category/category-routing.module";
import {authenticationRoute} from "./architecture/authentication/authentication-routing.module";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [...categoryRoutes]
  },
  {
    path: "auth",
    children: [
      ...authenticationRoute
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

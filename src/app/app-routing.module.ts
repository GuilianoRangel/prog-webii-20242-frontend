import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./core/home/home.component";
import {categoryRoutes} from "./pages/category/category-routing.module";
import {authenticationRoute} from "./architecture/authentication/authentication-routing.module";
import {authorizationRoutes} from "./architecture/authorization/authorization-routing.module";
import {categoryPopupRoutes} from "./pages/category-popup/category-routing.module";
import {taskRoutes} from "./pages/task/task-routing.module";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      ...categoryRoutes,
      ...categoryPopupRoutes,
      ...taskRoutes,
      ...authorizationRoutes
    ]
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

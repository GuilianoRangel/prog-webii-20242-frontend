import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeCategoryComponent} from "./home-category/home-category.component";
import {ListCategoryComponent} from "./list-category/list-category.component";
import {FormCategoryComponent} from "./form-category/form-category.component";
import {SecurityGuard} from "../../architecture/security/security.guard";
import {CrudActionEnum} from "../../architecture/component/curd-action";

export const categoryRoutes: Routes = [
  {
    path: 'category',
    component: HomeCategoryComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "list"
      },
      {
        path: "list",
        component: ListCategoryComponent,
        canActivate: [SecurityGuard],
        data: {
          security: {roles: ['ROLE_CATEGORY_READ_ALL']},
          crud_action: CrudActionEnum.LIST,
        }
      },
      {
        path: "new",
        component: FormCategoryComponent,
        data: {
          crud_action: CrudActionEnum.CREATE,
        }
      },
      {
        path: ":id/edit",
        component: FormCategoryComponent,
        data: {
          crud_action: CrudActionEnum.ALTER,
        }
      }
    ]
  }
];

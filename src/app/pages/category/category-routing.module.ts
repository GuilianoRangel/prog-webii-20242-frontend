import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeCategoryComponent} from "./home-category/home-category.component";
import {ListCategoryComponent} from "./list-category/list-category.component";
import {FormCategoryComponent} from "./form-category/form-category.component";
import {SecurityGuard} from "../../architecture/security/security.guard";
import {CrudActionEnum} from "../../architecture/component/curd-action";

export enum CategoryRoles {
  CREATE = "ROLE_CATEGORY_CREATE",
  READ = "ROLE_CATEGORY_READ",
  UPDATE = "ROLE_CATEGORY_UPDATE",
  DELETE = "ROLE_CATEGORY_DELETE",
  READ_ALL = "ROLE_CATEGORY_READ_ALL",
}

export enum CategoryPaths {
  BASE = 'category',
  CATEGORY_PATH = '/'+BASE,
  RELATIVE_LIST = 'list',
  RELATIVE_NEW = 'new',
  RELATIVE_EDIT = 'edit',
  LIST = '/'+BASE+'/'+RELATIVE_LIST,
  NEW = '/'+BASE+'/'+RELATIVE_NEW
}

export const categoryRoutes: Routes = [
  {
    path: CategoryPaths.BASE,
    component: HomeCategoryComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: CategoryPaths.RELATIVE_LIST
      },
      {
        path: CategoryPaths.RELATIVE_LIST,
        component: ListCategoryComponent,
        canActivate: [SecurityGuard],
        data: {
          security: {roles: [CategoryRoles.READ_ALL]},
          crud_action: CrudActionEnum.LIST,
        }
      },
      {
        path: CategoryPaths.RELATIVE_NEW,
        component: FormCategoryComponent,
        data: {
          security: {roles: [CategoryRoles.CREATE]},
          crud_action: CrudActionEnum.CREATE,
        }
      },
      {
        path: `:id/${CategoryPaths.RELATIVE_EDIT}`,
        component: FormCategoryComponent,
        data: {
          security: {roles: [CategoryRoles.UPDATE]},
          crud_action: CrudActionEnum.ALTER,
        }
      }
    ]
  }
];

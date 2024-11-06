import {Routes} from '@angular/router';
import {HomeCategoryPopupComponent} from "./home-category/home-category-popup.component";
import {SecurityGuard} from "../../architecture/security/security.guard";
import {CrudActionEnum} from "../../architecture/component/curd-action";

export enum CategoryPopupRoles {
  CREATE = "ROLE_CATEGORY_CREATE",
  READ = "ROLE_CATEGORY_READ",
  UPDATE = "ROLE_CATEGORY_UPDATE",
  DELETE = "ROLE_CATEGORY_DELETE",
  READ_ALL = "ROLE_CATEGORY_READ_ALL",
}

export enum CategoryPopupPaths {
  BASE = 'category-popup',
  CATEGORY_PATH = '/'+BASE,
  RELATIVE_LIST = 'list',
  LIST = '/'+BASE+'/'+RELATIVE_LIST,
}

export const categoryPopupRoutes: Routes = [
  {
    path: CategoryPopupPaths.BASE,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: CategoryPopupPaths.RELATIVE_LIST
      },
      {
        path: CategoryPopupPaths.RELATIVE_LIST,
        component: HomeCategoryPopupComponent,
        canActivate: [SecurityGuard],
        data: {
          security: {roles: [CategoryPopupRoles.READ_ALL]},
          crud_action: CrudActionEnum.LIST,
        }
      },
    ]
  }
];

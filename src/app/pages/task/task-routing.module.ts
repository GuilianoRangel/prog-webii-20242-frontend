import {Routes} from '@angular/router';
import {SecurityGuard} from "../../architecture/security/security.guard";
import {CrudActionEnum} from "../../architecture/component/curd-action";
import {HomeTaskComponent} from "./home-task/home-task.component";
import {ListTaskComponent} from "./list-task/list-task.component";
import {FormTaskComponent} from "./form-task/form-task.component";
import {CategoryResolver} from "../../shared/resolvers/category.resolver";

export enum TaskRoles {
  CREATE = "ROLE_TASK_CREATE",
  READ = "ROLE_TASK_READ",
  UPDATE = "ROLE_TASK_UPDATE",
  DELETE = "ROLE_TASK_DELETE",
  READ_ALL = "ROLE_TASK_READ_ALL",
}

export enum TaskPaths {
  BASE = 'task',
  TASK_PATH = '/'+BASE,
  RELATIVE_LIST = 'list',
  RELATIVE_NEW = 'new',
  RELATIVE_EDIT = 'edit',
  LIST = '/'+BASE+'/'+RELATIVE_LIST,
  NEW = '/'+BASE+'/'+RELATIVE_NEW
}

export const taskRoutes: Routes = [
  {
    path: TaskPaths.BASE,
    component: HomeTaskComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: TaskPaths.RELATIVE_LIST
      },
      {
        path: TaskPaths.RELATIVE_LIST,
        component: ListTaskComponent,
        canActivate: [SecurityGuard],
        data: {
          security: {roles: [TaskRoles.READ_ALL]},
          crud_action: CrudActionEnum.LIST,
        }
      },
      {
        path: TaskPaths.RELATIVE_NEW,
        component: FormTaskComponent,
        data: {
          security: {roles: [TaskRoles.CREATE]},
          crud_action: CrudActionEnum.CREATE,
        },
        resolve: {
          categories: CategoryResolver
        }
      },
      {
        path: `:id/${TaskPaths.RELATIVE_EDIT}`,
        component: FormTaskComponent,
        data: {
          security: {roles: [TaskRoles.UPDATE]},
          crud_action: CrudActionEnum.ALTER,
        },
        resolve: {
          categories: CategoryResolver
        }
      }
    ]
  }
];

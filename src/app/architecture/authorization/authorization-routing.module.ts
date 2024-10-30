import {Routes} from '@angular/router';
import {SecurityGuard} from "../security/security.guard";
import {SecurityUserPaths, securityUserRoutes} from "./security-user/security-user-routing.module";

export enum AuthorizationPaths {
  BASE = 'authorization',
  SECURITY_USER = '/'+BASE+'/'+SecurityUserPaths.BASE
}

export const authorizationRoutes: Routes = [
  {
    path: AuthorizationPaths.BASE.valueOf(),
    canActivate: [
      SecurityGuard
    ],
    children: [
      ...securityUserRoutes,
    ]
  }
];

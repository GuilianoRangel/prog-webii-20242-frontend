/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface SecurityUserControllerInitializeAdminDataUser$Params {

/**
 * senha
 */
  password: string;
}

export function securityUserControllerInitializeAdminDataUser(http: HttpClient, rootUrl: string, params: SecurityUserControllerInitializeAdminDataUser$Params, context?: HttpContext): Observable<StrictHttpResponse<any>> {
  const rb = new RequestBuilder(rootUrl, securityUserControllerInitializeAdminDataUser.PATH, 'get');
  if (params) {
    rb.path('password', params.password, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<any>;
    })
  );
}

securityUserControllerInitializeAdminDataUser.PATH = '/api/v1/user/initialize-admin-user/{password}';
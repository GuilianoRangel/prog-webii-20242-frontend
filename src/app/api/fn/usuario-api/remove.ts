/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SecurityUserDto } from '../../models/security-user-dto';

export interface Remove$Params {
  id: number;
}

export function remove(http: HttpClient, rootUrl: string, params: Remove$Params, context?: HttpContext): Observable<StrictHttpResponse<SecurityUserDto>> {
  const rb = new RequestBuilder(rootUrl, remove.PATH, 'delete');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<SecurityUserDto>;
    })
  );
}

remove.PATH = '/api/v1/user/{id}';

/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SecurityGroupDto } from '../../models/security-group-dto';

export interface Remove1$Params {
  id: number;
}

export function remove1(http: HttpClient, rootUrl: string, params: Remove1$Params, context?: HttpContext): Observable<StrictHttpResponse<SecurityGroupDto>> {
  const rb = new RequestBuilder(rootUrl, remove1.PATH, 'delete');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<SecurityGroupDto>;
    })
  );
}

remove1.PATH = '/api/v1/groups/{id}';

/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SecurityGroupDto } from '../../models/security-group-dto';

export interface SecurityGroupControllerGetActiveGroups$Params {
}

export function securityGroupControllerGetActiveGroups(http: HttpClient, rootUrl: string, params?: SecurityGroupControllerGetActiveGroups$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SecurityGroupDto>>> {
  const rb = new RequestBuilder(rootUrl, securityGroupControllerGetActiveGroups.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<SecurityGroupDto>>;
    })
  );
}

securityGroupControllerGetActiveGroups.PATH = '/api/v1/groups/active-groups';

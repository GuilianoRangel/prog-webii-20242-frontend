/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SearchField } from '../../models/search-field';

export interface SecurityGroupControllerSearchFieldsList$Params {
}

export function securityGroupControllerSearchFieldsList(http: HttpClient, rootUrl: string, params?: SecurityGroupControllerSearchFieldsList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SearchField>>> {
  const rb = new RequestBuilder(rootUrl, securityGroupControllerSearchFieldsList.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<SearchField>>;
    })
  );
}

securityGroupControllerSearchFieldsList.PATH = '/api/v1/groups/search-fields';
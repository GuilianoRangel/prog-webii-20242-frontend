/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SearchFieldValue } from '../../models/search-field-value';
import { SecurityUserDto } from '../../models/security-user-dto';

export interface SecurityUserControllerSearchFieldsAction$Params {
      body: Array<SearchFieldValue>
}

export function securityUserControllerSearchFieldsAction(http: HttpClient, rootUrl: string, params: SecurityUserControllerSearchFieldsAction$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SecurityUserDto>>> {
  const rb = new RequestBuilder(rootUrl, securityUserControllerSearchFieldsAction.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<SecurityUserDto>>;
    })
  );
}

securityUserControllerSearchFieldsAction.PATH = '/api/v1/user/search-fields';

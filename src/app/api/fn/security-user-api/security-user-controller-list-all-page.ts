/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Pageable } from '../../models/pageable';
import { PageSecurityUserDto } from '../../models/page-security-user-dto';

export interface SecurityUserControllerListAllPage$Params {
  page: Pageable;
}

export function securityUserControllerListAllPage(http: HttpClient, rootUrl: string, params: SecurityUserControllerListAllPage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageSecurityUserDto>> {
  const rb = new RequestBuilder(rootUrl, securityUserControllerListAllPage.PATH, 'get');
  if (params) {
    rb.query('page', params.page, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageSecurityUserDto>;
    })
  );
}

securityUserControllerListAllPage.PATH = '/api/v1/user/page';
/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Pageable } from '../../models/pageable';
import { PageSecurityGroupDto } from '../../models/page-security-group-dto';

export interface SecurityGroupControllerListAllPage$Params {
  page: Pageable;
}

export function securityGroupControllerListAllPage(http: HttpClient, rootUrl: string, params: SecurityGroupControllerListAllPage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageSecurityGroupDto>> {
  const rb = new RequestBuilder(rootUrl, securityGroupControllerListAllPage.PATH, 'get');
  if (params) {
    rb.query('page', params.page, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageSecurityGroupDto>;
    })
  );
}

securityGroupControllerListAllPage.PATH = '/api/v1/groups/page';

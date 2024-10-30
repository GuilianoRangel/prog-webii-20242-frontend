/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Student } from '../../models/student';

export interface ListYesterdayRegisters$Params {
}

export function listYesterdayRegisters(http: HttpClient, rootUrl: string, params?: ListYesterdayRegisters$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Student>>> {
  const rb = new RequestBuilder(rootUrl, listYesterdayRegisters.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Student>>;
    })
  );
}

listYesterdayRegisters.PATH = '/api/v1/student/yesterday-registers';

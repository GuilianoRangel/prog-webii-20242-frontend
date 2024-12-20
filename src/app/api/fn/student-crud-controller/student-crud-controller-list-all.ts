/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { StudentListDto } from '../../models/student-list-dto';

export interface StudentCrudControllerListAll$Params {
}

export function studentCrudControllerListAll(http: HttpClient, rootUrl: string, params?: StudentCrudControllerListAll$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<StudentListDto>>> {
  const rb = new RequestBuilder(rootUrl, studentCrudControllerListAll.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<StudentListDto>>;
    })
  );
}

studentCrudControllerListAll.PATH = '/api/v1/crud-student';

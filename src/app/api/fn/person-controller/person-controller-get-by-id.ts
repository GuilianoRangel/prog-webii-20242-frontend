/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PersonDto } from '../../models/person-dto';

export interface PersonControllerGetById$Params {

/**
 * Id da entidade
 */
  id: number;
}

export function personControllerGetById(http: HttpClient, rootUrl: string, params: PersonControllerGetById$Params, context?: HttpContext): Observable<StrictHttpResponse<PersonDto>> {
  const rb = new RequestBuilder(rootUrl, personControllerGetById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PersonDto>;
    })
  );
}

personControllerGetById.PATH = '/api/v1/person/{id}';

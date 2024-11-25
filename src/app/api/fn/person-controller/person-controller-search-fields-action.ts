/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PersonListDto } from '../../models/person-list-dto';
import { SearchFieldValue } from '../../models/search-field-value';

export interface PersonControllerSearchFieldsAction$Params {
      body: Array<SearchFieldValue>
}

export function personControllerSearchFieldsAction(http: HttpClient, rootUrl: string, params: PersonControllerSearchFieldsAction$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PersonListDto>>> {
  const rb = new RequestBuilder(rootUrl, personControllerSearchFieldsAction.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<PersonListDto>>;
    })
  );
}

personControllerSearchFieldsAction.PATH = '/api/v1/person/search-fields';
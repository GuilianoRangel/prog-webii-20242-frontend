/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PageCategoryDto } from '../../models/page-category-dto';
import { SearchFieldValue } from '../../models/search-field-value';

export interface CategoryControllerSearchFieldsActionPage$Params {
  page?: number;
  size?: number;
  sort?: Array<string>;
      body: Array<SearchFieldValue>
}

export function categoryControllerSearchFieldsActionPage(http: HttpClient, rootUrl: string, params: CategoryControllerSearchFieldsActionPage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageCategoryDto>> {
  const rb = new RequestBuilder(rootUrl, categoryControllerSearchFieldsActionPage.PATH, 'post');
  if (params) {
    rb.query('page', params.page, {});
    rb.query('size', params.size, {});
    rb.query('sort', params.sort, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageCategoryDto>;
    })
  );
}

categoryControllerSearchFieldsActionPage.PATH = '/api/v1/category/search-fields/page';
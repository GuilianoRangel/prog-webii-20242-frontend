/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { PagePersonListDto } from '../models/page-person-list-dto';
import { personControllerCreate } from '../fn/person-controller/person-controller-create';
import { PersonControllerCreate$Params } from '../fn/person-controller/person-controller-create';
import { personControllerGetById } from '../fn/person-controller/person-controller-get-by-id';
import { PersonControllerGetById$Params } from '../fn/person-controller/person-controller-get-by-id';
import { personControllerListAll } from '../fn/person-controller/person-controller-list-all';
import { PersonControllerListAll$Params } from '../fn/person-controller/person-controller-list-all';
import { personControllerListAllPage } from '../fn/person-controller/person-controller-list-all-page';
import { PersonControllerListAllPage$Params } from '../fn/person-controller/person-controller-list-all-page';
import { personControllerRemove } from '../fn/person-controller/person-controller-remove';
import { PersonControllerRemove$Params } from '../fn/person-controller/person-controller-remove';
import { personControllerSearchFieldsAction } from '../fn/person-controller/person-controller-search-fields-action';
import { PersonControllerSearchFieldsAction$Params } from '../fn/person-controller/person-controller-search-fields-action';
import { personControllerSearchFieldsActionPage } from '../fn/person-controller/person-controller-search-fields-action-page';
import { PersonControllerSearchFieldsActionPage$Params } from '../fn/person-controller/person-controller-search-fields-action-page';
import { personControllerSearchFieldsList } from '../fn/person-controller/person-controller-search-fields-list';
import { PersonControllerSearchFieldsList$Params } from '../fn/person-controller/person-controller-search-fields-list';
import { personControllerUpdate } from '../fn/person-controller/person-controller-update';
import { PersonControllerUpdate$Params } from '../fn/person-controller/person-controller-update';
import { PersonDto } from '../models/person-dto';
import { PersonListDto } from '../models/person-list-dto';
import { SearchField } from '../models/search-field';

@Injectable({ providedIn: 'root' })
export class PersonControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `personControllerGetById()` */
  static readonly PersonControllerGetByIdPath = '/api/v1/person/{id}';

  /**
   * Obter os dados completos de uma entidiade pelo id informado!
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `personControllerGetById()` instead.
   *
   * This method doesn't expect any request body.
   */
  personControllerGetById$Response(params: PersonControllerGetById$Params, context?: HttpContext): Observable<StrictHttpResponse<PersonDto>> {
    return personControllerGetById(this.http, this.rootUrl, params, context);
  }

  /**
   * Obter os dados completos de uma entidiade pelo id informado!
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `personControllerGetById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  personControllerGetById(params: PersonControllerGetById$Params, context?: HttpContext): Observable<PersonDto> {
    return this.personControllerGetById$Response(params, context).pipe(
      map((r: StrictHttpResponse<PersonDto>): PersonDto => r.body)
    );
  }

  /** Path part for operation `personControllerUpdate()` */
  static readonly PersonControllerUpdatePath = '/api/v1/person/{id}';

  /**
   * Método utilizado para altlerar os dados de uma entidiade
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `personControllerUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  personControllerUpdate$Response(params: PersonControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<PersonDto>> {
    return personControllerUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * Método utilizado para altlerar os dados de uma entidiade
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `personControllerUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  personControllerUpdate(params: PersonControllerUpdate$Params, context?: HttpContext): Observable<PersonDto> {
    return this.personControllerUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<PersonDto>): PersonDto => r.body)
    );
  }

  /** Path part for operation `personControllerRemove()` */
  static readonly PersonControllerRemovePath = '/api/v1/person/{id}';

  /**
   * Método utilizado para remover uma entidiade pela id informado
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `personControllerRemove()` instead.
   *
   * This method doesn't expect any request body.
   */
  personControllerRemove$Response(params: PersonControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<PersonDto>> {
    return personControllerRemove(this.http, this.rootUrl, params, context);
  }

  /**
   * Método utilizado para remover uma entidiade pela id informado
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `personControllerRemove$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  personControllerRemove(params: PersonControllerRemove$Params, context?: HttpContext): Observable<PersonDto> {
    return this.personControllerRemove$Response(params, context).pipe(
      map((r: StrictHttpResponse<PersonDto>): PersonDto => r.body)
    );
  }

  /** Path part for operation `personControllerListAll()` */
  static readonly PersonControllerListAllPath = '/api/v1/person';

  /**
   * lista todos modelos
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `personControllerListAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  personControllerListAll$Response(params?: PersonControllerListAll$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PersonListDto>>> {
    return personControllerListAll(this.http, this.rootUrl, params, context);
  }

  /**
   * lista todos modelos
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `personControllerListAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  personControllerListAll(params?: PersonControllerListAll$Params, context?: HttpContext): Observable<Array<PersonListDto>> {
    return this.personControllerListAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<PersonListDto>>): Array<PersonListDto> => r.body)
    );
  }

  /** Path part for operation `personControllerCreate()` */
  static readonly PersonControllerCreatePath = '/api/v1/person';

  /**
   * Método utilizado para realizar a inclusão de um entidade
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `personControllerCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  personControllerCreate$Response(params: PersonControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<PersonDto>> {
    return personControllerCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * Método utilizado para realizar a inclusão de um entidade
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `personControllerCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  personControllerCreate(params: PersonControllerCreate$Params, context?: HttpContext): Observable<PersonDto> {
    return this.personControllerCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<PersonDto>): PersonDto => r.body)
    );
  }

  /** Path part for operation `personControllerSearchFieldsList()` */
  static readonly PersonControllerSearchFieldsListPath = '/api/v1/person/search-fields';

  /**
   * Listagem dos campos de busca
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `personControllerSearchFieldsList()` instead.
   *
   * This method doesn't expect any request body.
   */
  personControllerSearchFieldsList$Response(params?: PersonControllerSearchFieldsList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SearchField>>> {
    return personControllerSearchFieldsList(this.http, this.rootUrl, params, context);
  }

  /**
   * Listagem dos campos de busca
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `personControllerSearchFieldsList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  personControllerSearchFieldsList(params?: PersonControllerSearchFieldsList$Params, context?: HttpContext): Observable<Array<SearchField>> {
    return this.personControllerSearchFieldsList$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SearchField>>): Array<SearchField> => r.body)
    );
  }

  /** Path part for operation `personControllerSearchFieldsAction()` */
  static readonly PersonControllerSearchFieldsActionPath = '/api/v1/person/search-fields';

  /**
   * Realiza a busca pelos valores dos campos informados
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `personControllerSearchFieldsAction()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  personControllerSearchFieldsAction$Response(params: PersonControllerSearchFieldsAction$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PersonListDto>>> {
    return personControllerSearchFieldsAction(this.http, this.rootUrl, params, context);
  }

  /**
   * Realiza a busca pelos valores dos campos informados
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `personControllerSearchFieldsAction$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  personControllerSearchFieldsAction(params: PersonControllerSearchFieldsAction$Params, context?: HttpContext): Observable<Array<PersonListDto>> {
    return this.personControllerSearchFieldsAction$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<PersonListDto>>): Array<PersonListDto> => r.body)
    );
  }

  /** Path part for operation `personControllerSearchFieldsActionPage()` */
  static readonly PersonControllerSearchFieldsActionPagePath = '/api/v1/person/search-fields/page';

  /**
   * Realiza a busca pelos valores dos campos informados
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `personControllerSearchFieldsActionPage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  personControllerSearchFieldsActionPage$Response(params: PersonControllerSearchFieldsActionPage$Params, context?: HttpContext): Observable<StrictHttpResponse<PagePersonListDto>> {
    return personControllerSearchFieldsActionPage(this.http, this.rootUrl, params, context);
  }

  /**
   * Realiza a busca pelos valores dos campos informados
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `personControllerSearchFieldsActionPage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  personControllerSearchFieldsActionPage(params: PersonControllerSearchFieldsActionPage$Params, context?: HttpContext): Observable<PagePersonListDto> {
    return this.personControllerSearchFieldsActionPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<PagePersonListDto>): PagePersonListDto => r.body)
    );
  }

  /** Path part for operation `personControllerListAllPage()` */
  static readonly PersonControllerListAllPagePath = '/api/v1/person/page';

  /**
   * lista todos modelos paginada
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `personControllerListAllPage()` instead.
   *
   * This method doesn't expect any request body.
   */
  personControllerListAllPage$Response(params: PersonControllerListAllPage$Params, context?: HttpContext): Observable<StrictHttpResponse<PagePersonListDto>> {
    return personControllerListAllPage(this.http, this.rootUrl, params, context);
  }

  /**
   * lista todos modelos paginada
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `personControllerListAllPage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  personControllerListAllPage(params: PersonControllerListAllPage$Params, context?: HttpContext): Observable<PagePersonListDto> {
    return this.personControllerListAllPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<PagePersonListDto>): PagePersonListDto => r.body)
    );
  }

}

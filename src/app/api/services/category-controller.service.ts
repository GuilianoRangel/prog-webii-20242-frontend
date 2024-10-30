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

import { categoryControllerCreate } from '../fn/category-controller/category-controller-create';
import { CategoryControllerCreate$Params } from '../fn/category-controller/category-controller-create';
import { categoryControllerGetById } from '../fn/category-controller/category-controller-get-by-id';
import { CategoryControllerGetById$Params } from '../fn/category-controller/category-controller-get-by-id';
import { categoryControllerListAll } from '../fn/category-controller/category-controller-list-all';
import { CategoryControllerListAll$Params } from '../fn/category-controller/category-controller-list-all';
import { categoryControllerRemove } from '../fn/category-controller/category-controller-remove';
import { CategoryControllerRemove$Params } from '../fn/category-controller/category-controller-remove';
import { categoryControllerUpdate } from '../fn/category-controller/category-controller-update';
import { CategoryControllerUpdate$Params } from '../fn/category-controller/category-controller-update';
import { CategoryDto } from '../models/category-dto';

@Injectable({ providedIn: 'root' })
export class CategoryControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `categoryControllerGetById()` */
  static readonly CategoryControllerGetByIdPath = '/api/v1/category/{id}';

  /**
   * Obter os dados completos de uma entidiade pelo id informado!
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `categoryControllerGetById()` instead.
   *
   * This method doesn't expect any request body.
   */
  categoryControllerGetById$Response(params: CategoryControllerGetById$Params, context?: HttpContext): Observable<StrictHttpResponse<CategoryDto>> {
    return categoryControllerGetById(this.http, this.rootUrl, params, context);
  }

  /**
   * Obter os dados completos de uma entidiade pelo id informado!
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `categoryControllerGetById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  categoryControllerGetById(params: CategoryControllerGetById$Params, context?: HttpContext): Observable<CategoryDto> {
    return this.categoryControllerGetById$Response(params, context).pipe(
      map((r: StrictHttpResponse<CategoryDto>): CategoryDto => r.body)
    );
  }

  /** Path part for operation `categoryControllerUpdate()` */
  static readonly CategoryControllerUpdatePath = '/api/v1/category/{id}';

  /**
   * Método utilizado para altlerar os dados de uma entidiade
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `categoryControllerUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  categoryControllerUpdate$Response(params: CategoryControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<CategoryDto>> {
    return categoryControllerUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * Método utilizado para altlerar os dados de uma entidiade
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `categoryControllerUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  categoryControllerUpdate(params: CategoryControllerUpdate$Params, context?: HttpContext): Observable<CategoryDto> {
    return this.categoryControllerUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<CategoryDto>): CategoryDto => r.body)
    );
  }

  /** Path part for operation `categoryControllerRemove()` */
  static readonly CategoryControllerRemovePath = '/api/v1/category/{id}';

  /**
   * Método utilizado para remover uma entidiade pela id informado
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `categoryControllerRemove()` instead.
   *
   * This method doesn't expect any request body.
   */
  categoryControllerRemove$Response(params: CategoryControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<CategoryDto>> {
    return categoryControllerRemove(this.http, this.rootUrl, params, context);
  }

  /**
   * Método utilizado para remover uma entidiade pela id informado
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `categoryControllerRemove$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  categoryControllerRemove(params: CategoryControllerRemove$Params, context?: HttpContext): Observable<CategoryDto> {
    return this.categoryControllerRemove$Response(params, context).pipe(
      map((r: StrictHttpResponse<CategoryDto>): CategoryDto => r.body)
    );
  }

  /** Path part for operation `categoryControllerListAll()` */
  static readonly CategoryControllerListAllPath = '/api/v1/category';

  /**
   * lista todos modelos
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `categoryControllerListAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  categoryControllerListAll$Response(params?: CategoryControllerListAll$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CategoryDto>>> {
    return categoryControllerListAll(this.http, this.rootUrl, params, context);
  }

  /**
   * lista todos modelos
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `categoryControllerListAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  categoryControllerListAll(params?: CategoryControllerListAll$Params, context?: HttpContext): Observable<Array<CategoryDto>> {
    return this.categoryControllerListAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<CategoryDto>>): Array<CategoryDto> => r.body)
    );
  }

  /** Path part for operation `categoryControllerCreate()` */
  static readonly CategoryControllerCreatePath = '/api/v1/category';

  /**
   * Método utilizado para realizar a inclusão de um entidade
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `categoryControllerCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  categoryControllerCreate$Response(params: CategoryControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<CategoryDto>> {
    return categoryControllerCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * Método utilizado para realizar a inclusão de um entidade
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `categoryControllerCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  categoryControllerCreate(params: CategoryControllerCreate$Params, context?: HttpContext): Observable<CategoryDto> {
    return this.categoryControllerCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<CategoryDto>): CategoryDto => r.body)
    );
  }

}

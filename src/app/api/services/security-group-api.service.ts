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

import { GroupStatisticsDto } from '../models/group-statistics-dto';
import { securityGroupControllerActivateGroup } from '../fn/security-group-api/security-group-controller-activate-group';
import { SecurityGroupControllerActivateGroup$Params } from '../fn/security-group-api/security-group-controller-activate-group';
import { securityGroupControllerCreate } from '../fn/security-group-api/security-group-controller-create';
import { SecurityGroupControllerCreate$Params } from '../fn/security-group-api/security-group-controller-create';
import { securityGroupControllerGetActiveGroups } from '../fn/security-group-api/security-group-controller-get-active-groups';
import { SecurityGroupControllerGetActiveGroups$Params } from '../fn/security-group-api/security-group-controller-get-active-groups';
import { securityGroupControllerGetAllGroupByFilter } from '../fn/security-group-api/security-group-controller-get-all-group-by-filter';
import { SecurityGroupControllerGetAllGroupByFilter$Params } from '../fn/security-group-api/security-group-controller-get-all-group-by-filter';
import { securityGroupControllerGetById } from '../fn/security-group-api/security-group-controller-get-by-id';
import { SecurityGroupControllerGetById$Params } from '../fn/security-group-api/security-group-controller-get-by-id';
import { securityGroupControllerGetGroupsByLoggedUser } from '../fn/security-group-api/security-group-controller-get-groups-by-logged-user';
import { SecurityGroupControllerGetGroupsByLoggedUser$Params } from '../fn/security-group-api/security-group-controller-get-groups-by-logged-user';
import { securityGroupControllerGetGroupStatistics } from '../fn/security-group-api/security-group-controller-get-group-statistics';
import { SecurityGroupControllerGetGroupStatistics$Params } from '../fn/security-group-api/security-group-controller-get-group-statistics';
import { securityGroupControllerGetGroupStatisticsReport } from '../fn/security-group-api/security-group-controller-get-group-statistics-report';
import { SecurityGroupControllerGetGroupStatisticsReport$Params } from '../fn/security-group-api/security-group-controller-get-group-statistics-report';
import { securityGroupControllerInactivateGroup } from '../fn/security-group-api/security-group-controller-inactivate-group';
import { SecurityGroupControllerInactivateGroup$Params } from '../fn/security-group-api/security-group-controller-inactivate-group';
import { securityGroupControllerListAll } from '../fn/security-group-api/security-group-controller-list-all';
import { SecurityGroupControllerListAll$Params } from '../fn/security-group-api/security-group-controller-list-all';
import { securityGroupControllerRemove } from '../fn/security-group-api/security-group-controller-remove';
import { SecurityGroupControllerRemove$Params } from '../fn/security-group-api/security-group-controller-remove';
import { securityGroupControllerUpdate } from '../fn/security-group-api/security-group-controller-update';
import { SecurityGroupControllerUpdate$Params } from '../fn/security-group-api/security-group-controller-update';
import { SecurityGroupDto } from '../models/security-group-dto';


/**
 * Manutenção de Grupos de usuários
 */
@Injectable({ providedIn: 'root' })
export class SecurityGroupApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `securityGroupControllerGetById()` */
  static readonly SecurityGroupControllerGetByIdPath = '/api/v1/groups/{id}';

  /**
   * Obter os dados do Grupo pelo id informado!
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `securityGroupControllerGetById()` instead.
   *
   * This method doesn't expect any request body.
   */
  securityGroupControllerGetById$Response(params: SecurityGroupControllerGetById$Params, context?: HttpContext): Observable<StrictHttpResponse<SecurityGroupDto>> {
    return securityGroupControllerGetById(this.http, this.rootUrl, params, context);
  }

  /**
   * Obter os dados do Grupo pelo id informado!
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `securityGroupControllerGetById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  securityGroupControllerGetById(params: SecurityGroupControllerGetById$Params, context?: HttpContext): Observable<SecurityGroupDto> {
    return this.securityGroupControllerGetById$Response(params, context).pipe(
      map((r: StrictHttpResponse<SecurityGroupDto>): SecurityGroupDto => r.body)
    );
  }

  /** Path part for operation `securityGroupControllerUpdate()` */
  static readonly SecurityGroupControllerUpdatePath = '/api/v1/groups/{id}';

  /**
   * Método utilizado para altlerar os dados de uma entidiade
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `securityGroupControllerUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  securityGroupControllerUpdate$Response(params: SecurityGroupControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<SecurityGroupDto>> {
    return securityGroupControllerUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * Método utilizado para altlerar os dados de uma entidiade
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `securityGroupControllerUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  securityGroupControllerUpdate(params: SecurityGroupControllerUpdate$Params, context?: HttpContext): Observable<SecurityGroupDto> {
    return this.securityGroupControllerUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<SecurityGroupDto>): SecurityGroupDto => r.body)
    );
  }

  /** Path part for operation `securityGroupControllerRemove()` */
  static readonly SecurityGroupControllerRemovePath = '/api/v1/groups/{id}';

  /**
   * Método utilizado para remover uma entidiade pela id informado
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `securityGroupControllerRemove()` instead.
   *
   * This method doesn't expect any request body.
   */
  securityGroupControllerRemove$Response(params: SecurityGroupControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<SecurityGroupDto>> {
    return securityGroupControllerRemove(this.http, this.rootUrl, params, context);
  }

  /**
   * Método utilizado para remover uma entidiade pela id informado
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `securityGroupControllerRemove$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  securityGroupControllerRemove(params: SecurityGroupControllerRemove$Params, context?: HttpContext): Observable<SecurityGroupDto> {
    return this.securityGroupControllerRemove$Response(params, context).pipe(
      map((r: StrictHttpResponse<SecurityGroupDto>): SecurityGroupDto => r.body)
    );
  }

  /** Path part for operation `securityGroupControllerInactivateGroup()` */
  static readonly SecurityGroupControllerInactivateGroupPath = '/api/v1/groups/{id}/inactivate';

  /**
   * Inativa o Grupo pelo id informado.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `securityGroupControllerInactivateGroup()` instead.
   *
   * This method doesn't expect any request body.
   */
  securityGroupControllerInactivateGroup$Response(params: SecurityGroupControllerInactivateGroup$Params, context?: HttpContext): Observable<StrictHttpResponse<any>> {
    return securityGroupControllerInactivateGroup(this.http, this.rootUrl, params, context);
  }

  /**
   * Inativa o Grupo pelo id informado.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `securityGroupControllerInactivateGroup$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  securityGroupControllerInactivateGroup(params: SecurityGroupControllerInactivateGroup$Params, context?: HttpContext): Observable<any> {
    return this.securityGroupControllerInactivateGroup$Response(params, context).pipe(
      map((r: StrictHttpResponse<any>): any => r.body)
    );
  }

  /** Path part for operation `securityGroupControllerActivateGroup()` */
  static readonly SecurityGroupControllerActivateGroupPath = '/api/v1/groups/{id}/activate';

  /**
   * Ativa o Grupo pelo id informado.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `securityGroupControllerActivateGroup()` instead.
   *
   * This method doesn't expect any request body.
   */
  securityGroupControllerActivateGroup$Response(params: SecurityGroupControllerActivateGroup$Params, context?: HttpContext): Observable<StrictHttpResponse<any>> {
    return securityGroupControllerActivateGroup(this.http, this.rootUrl, params, context);
  }

  /**
   * Ativa o Grupo pelo id informado.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `securityGroupControllerActivateGroup$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  securityGroupControllerActivateGroup(params: SecurityGroupControllerActivateGroup$Params, context?: HttpContext): Observable<any> {
    return this.securityGroupControllerActivateGroup$Response(params, context).pipe(
      map((r: StrictHttpResponse<any>): any => r.body)
    );
  }

  /** Path part for operation `securityGroupControllerListAll()` */
  static readonly SecurityGroupControllerListAllPath = '/api/v1/groups';

  /**
   * lista todos modelos
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `securityGroupControllerListAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  securityGroupControllerListAll$Response(params?: SecurityGroupControllerListAll$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SecurityGroupDto>>> {
    return securityGroupControllerListAll(this.http, this.rootUrl, params, context);
  }

  /**
   * lista todos modelos
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `securityGroupControllerListAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  securityGroupControllerListAll(params?: SecurityGroupControllerListAll$Params, context?: HttpContext): Observable<Array<SecurityGroupDto>> {
    return this.securityGroupControllerListAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SecurityGroupDto>>): Array<SecurityGroupDto> => r.body)
    );
  }

  /** Path part for operation `securityGroupControllerCreate()` */
  static readonly SecurityGroupControllerCreatePath = '/api/v1/groups';

  /**
   * Método utilizado para realizar a inclusão de um entidade
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `securityGroupControllerCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  securityGroupControllerCreate$Response(params: SecurityGroupControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<SecurityGroupDto>> {
    return securityGroupControllerCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * Método utilizado para realizar a inclusão de um entidade
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `securityGroupControllerCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  securityGroupControllerCreate(params: SecurityGroupControllerCreate$Params, context?: HttpContext): Observable<SecurityGroupDto> {
    return this.securityGroupControllerCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<SecurityGroupDto>): SecurityGroupDto => r.body)
    );
  }

  /** Path part for operation `securityGroupControllerGetGroupStatisticsReport()` */
  static readonly SecurityGroupControllerGetGroupStatisticsReportPath = '/api/v1/groups/users-report';

  /**
   * Retorna Relatório de Grupos.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `securityGroupControllerGetGroupStatisticsReport()` instead.
   *
   * This method doesn't expect any request body.
   */
  securityGroupControllerGetGroupStatisticsReport$Response(params?: SecurityGroupControllerGetGroupStatisticsReport$Params, context?: HttpContext): Observable<StrictHttpResponse<any>> {
    return securityGroupControllerGetGroupStatisticsReport(this.http, this.rootUrl, params, context);
  }

  /**
   * Retorna Relatório de Grupos.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `securityGroupControllerGetGroupStatisticsReport$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  securityGroupControllerGetGroupStatisticsReport(params?: SecurityGroupControllerGetGroupStatisticsReport$Params, context?: HttpContext): Observable<any> {
    return this.securityGroupControllerGetGroupStatisticsReport$Response(params, context).pipe(
      map((r: StrictHttpResponse<any>): any => r.body)
    );
  }

  /** Path part for operation `securityGroupControllerGetGroupsByLoggedUser()` */
  static readonly SecurityGroupControllerGetGroupsByLoggedUserPath = '/api/v1/groups/user';

  /**
   * Recupera os grupos pelo usuário logado.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `securityGroupControllerGetGroupsByLoggedUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  securityGroupControllerGetGroupsByLoggedUser$Response(params?: SecurityGroupControllerGetGroupsByLoggedUser$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SecurityGroupDto>>> {
    return securityGroupControllerGetGroupsByLoggedUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Recupera os grupos pelo usuário logado.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `securityGroupControllerGetGroupsByLoggedUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  securityGroupControllerGetGroupsByLoggedUser(params?: SecurityGroupControllerGetGroupsByLoggedUser$Params, context?: HttpContext): Observable<Array<SecurityGroupDto>> {
    return this.securityGroupControllerGetGroupsByLoggedUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SecurityGroupDto>>): Array<SecurityGroupDto> => r.body)
    );
  }

  /** Path part for operation `securityGroupControllerGetGroupStatistics()` */
  static readonly SecurityGroupControllerGetGroupStatisticsPath = '/api/v1/groups/statistics';

  /**
   * Retorna Estatisticas de Usuários pro grupo.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `securityGroupControllerGetGroupStatistics()` instead.
   *
   * This method doesn't expect any request body.
   */
  securityGroupControllerGetGroupStatistics$Response(params?: SecurityGroupControllerGetGroupStatistics$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<GroupStatisticsDto>>> {
    return securityGroupControllerGetGroupStatistics(this.http, this.rootUrl, params, context);
  }

  /**
   * Retorna Estatisticas de Usuários pro grupo.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `securityGroupControllerGetGroupStatistics$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  securityGroupControllerGetGroupStatistics(params?: SecurityGroupControllerGetGroupStatistics$Params, context?: HttpContext): Observable<Array<GroupStatisticsDto>> {
    return this.securityGroupControllerGetGroupStatistics$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<GroupStatisticsDto>>): Array<GroupStatisticsDto> => r.body)
    );
  }

  /** Path part for operation `securityGroupControllerGetAllGroupByFilter()` */
  static readonly SecurityGroupControllerGetAllGroupByFilterPath = '/api/v1/groups/filter';

  /**
   * Recupera as informações de Grupo conforme dados informados no filtro de busca
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `securityGroupControllerGetAllGroupByFilter()` instead.
   *
   * This method doesn't expect any request body.
   */
  securityGroupControllerGetAllGroupByFilter$Response(params: SecurityGroupControllerGetAllGroupByFilter$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SecurityGroupDto>>> {
    return securityGroupControllerGetAllGroupByFilter(this.http, this.rootUrl, params, context);
  }

  /**
   * Recupera as informações de Grupo conforme dados informados no filtro de busca
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `securityGroupControllerGetAllGroupByFilter$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  securityGroupControllerGetAllGroupByFilter(params: SecurityGroupControllerGetAllGroupByFilter$Params, context?: HttpContext): Observable<Array<SecurityGroupDto>> {
    return this.securityGroupControllerGetAllGroupByFilter$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SecurityGroupDto>>): Array<SecurityGroupDto> => r.body)
    );
  }

  /** Path part for operation `securityGroupControllerGetActiveGroups()` */
  static readonly SecurityGroupControllerGetActiveGroupsPath = '/api/v1/groups/active-groups';

  /**
   * Retorna uma lista de Grupos ativos conforme o 'id' do Sistema informado.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `securityGroupControllerGetActiveGroups()` instead.
   *
   * This method doesn't expect any request body.
   */
  securityGroupControllerGetActiveGroups$Response(params?: SecurityGroupControllerGetActiveGroups$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SecurityGroupDto>>> {
    return securityGroupControllerGetActiveGroups(this.http, this.rootUrl, params, context);
  }

  /**
   * Retorna uma lista de Grupos ativos conforme o 'id' do Sistema informado.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `securityGroupControllerGetActiveGroups$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  securityGroupControllerGetActiveGroups(params?: SecurityGroupControllerGetActiveGroups$Params, context?: HttpContext): Observable<Array<SecurityGroupDto>> {
    return this.securityGroupControllerGetActiveGroups$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SecurityGroupDto>>): Array<SecurityGroupDto> => r.body)
    );
  }

}

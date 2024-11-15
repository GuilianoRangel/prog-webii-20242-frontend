import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {CrudAction} from "./curd-action";
import {ChangeDetectorRef, inject, model, NgModule, OnDestroy, OnInit} from "@angular/core";
import {CrudActionService} from "./crud-action.service";
import {Observable, Subscription} from "rxjs";
import {MessageService} from "../message/message.service";
import {ErrorService} from "../error.service";
import {SecurityService} from "../security/security.service";
import {CategoryDto} from "../../api/models/category-dto";
import {TaskDto} from "../../api/models/task-dto";
import {MatTableDataSource} from "@angular/material/table";
import {BaseComponent} from "./base.component";
import {GenericDto} from "../../api/models/generic-dto";
import {TaskControllerRemove$Params} from "../../api/fn/task-controller/task-controller-remove";
import {HttpContext} from "@angular/common/http";

export type BaseListComponentConfig<MODEL extends GenericDto> = {
  ENTITY_NAME_LABEL: string;
  UPDATE_ROLE: string,
  DELETE_ROLE: string,
  METHOD_LIST: () => Observable<MODEL[]>,
  METHOD_REMOVE: (params: { id: number }, context?: HttpContext) => Observable<MODEL>
};

@NgModule()
export abstract class BaseListComponent<MODEL extends GenericDto> extends BaseComponent<MODEL>{

  dataSource: MatTableDataSource<MODEL> = new MatTableDataSource<MODEL>([]);

  public HAS_PERMISSION_UPDATE: boolean;
  public HAS_PERMISSION_DELETE: boolean;

  private _entityNameLabel: string;
  private _listMethod: () => Observable<MODEL[]>;
  private _removeMethod: (params: { id: number }, context?: HttpContext) => Observable<MODEL>;

  abstract getComponentConfigs(): BaseListComponentConfig<MODEL>;

  protected constructor(
  ) {
    super();
    let componentConfigs = this.getComponentConfigs();
    this._entityNameLabel = componentConfigs.ENTITY_NAME_LABEL;
    this.HAS_PERMISSION_DELETE = this.securityService.hasRoles(componentConfigs.DELETE_ROLE);
    this.HAS_PERMISSION_UPDATE = this.securityService.hasRoles(componentConfigs.UPDATE_ROLE);
    this._removeMethod = componentConfigs.METHOD_REMOVE;
    this._listMethod = componentConfigs.METHOD_LIST;
  }

  override ngOnInit() {
    super.ngOnInit();
    this.getData();
  }

  confirmDelete(categoryDto: MODEL) {
    this.messageService.addConfirmYesNo(`Confirmar a exclusão da ${this._entityNameLabel}?`,() => {
      this.remover(categoryDto);
    });
  }

  remover(model: MODEL) {
    this.removeModel(model)
      .subscribe({next: returnValue => {
          this.getData();
          this.messageService.addMsgSuccess(`${this._entityNameLabel} excluída com sucesso!!!`);
        }, error: error =>{
          if (error.status === 404) {
            this.messageService.addMsgInf(`${this._entityNameLabel} não existe mais.`);
          } else {
            this.messageService.addMsgDanger("Erro ao excluir: "+error.message);
          }
        }
      });
  }

  removeModel(model: MODEL):Observable<MODEL>{
    let id = model.id || 0;
    return this._removeMethod({id: id})
  };

  private getData() {
    this.getModelData().subscribe(data => {
      this.dataSource = new MatTableDataSource<MODEL>(data || []);
    });
  }

  public getModelData():Observable<MODEL[]>{
    return this._listMethod();
  }


}

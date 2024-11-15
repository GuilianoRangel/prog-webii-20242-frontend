import {Component, OnInit} from '@angular/core';
import {BaseFormComponent, BaseFormComponentConfig} from "../../../architecture/component/base-form.component";
import {TaskDto} from "../../../api/models/task-dto";
import {TaskCreateDto} from "../../../api/models/task-create-dto";
import {CategoryRoles} from "../../category/category-routing.module";
import {TaskControllerService} from "../../../api/services/task-controller.service";
import {TaskUpdateDto} from "../../../api/models/task-update-dto";
import {CategoryDto} from "../../../api/models/category-dto";
import {HttpContext} from "@angular/common/http";
import {FormGroup} from "@angular/forms";
import {TaskPaths} from "../task-routing.module";

@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrl: './form-task.component.scss'
})
export class FormTaskComponent extends BaseFormComponent<TaskDto, TaskCreateDto, TaskUpdateDto> implements OnInit{

  getComponentConfigs(): BaseFormComponentConfig<TaskDto, TaskCreateDto, TaskUpdateDto> {
    return {
      ENTITY_NAME_LABEL: "Tarefa",
      CREATE_ROLE: CategoryRoles.CREATE,
      UPDATE_ROLE: CategoryRoles.UPDATE,
      METHOD_GET: (params: {id: any}, context?: HttpContext) => this.service.taskControllerGetById(params, context),
      METHOD_CREATE: (params: {body: TaskCreateDto}, context?: HttpContext) => this.service.taskControllerCreate(params, context),
      METHOD_UPDATE: (params: {id: any, body: TaskUpdateDto}, context?: HttpContext) => this.service.taskControllerUpdate(params, context),
      METHOD_REMOVE: (params, context) => this.service.taskControllerRemove(params, context),
      MODEL_CREATE_DEFAULT:  {id: undefined, category_id: 0, description: '', dueDate: undefined} as TaskCreateDto
    };
  }

  public categories: CategoryDto[] = [];
  constructor(public service: TaskControllerService) {
    super();
  }

  getBaseURL(): string {
    return TaskPaths.TASK_PATH;
  }

  override ngOnInit() {
    super.ngOnInit();
    this.retrieveForeignTableData();
  }

  protected setFormCustomFields(modelDto: TaskDto): void {
  }

  private retrieveForeignTableData() {
    this.categories = this.route.snapshot.data['categories'];
  }

  //utilizado caso queira sobrescrevr a criação automatica baseada no modelo para ação de create
  initFormModelCreate(): FormGroup | undefined{
    return undefined;
  }

  //utilizado caso queira sobrescrevr a criação automatica baseada no modelo para ação de update
  initFormModelUpdate(): FormGroup | undefined{
    return undefined;
  }
}

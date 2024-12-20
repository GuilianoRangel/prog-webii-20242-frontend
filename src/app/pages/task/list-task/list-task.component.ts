import {Component, ViewChild} from '@angular/core';
import {TaskDto} from "../../../api/models/task-dto";
import {TaskPaths, TaskRoles} from "../task-routing.module";
import {TaskControllerService} from "../../../api/services/task-controller.service";
import {Observable} from "rxjs";
import {BaseListComponent, BaseListComponentConfig} from "../../../architecture/component/base-list.component";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {SearchComponent} from "../../../architecture/search-module/seach-component/search.component";

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrl: './list-task.component.scss'
})
export class ListTaskComponent  extends BaseListComponent<TaskDto> {

  displayedColumns =  ['description','dueDate', 'category_name', 'completed', 'action'];

  @ViewChild(MatPaginator) override paginator!: MatPaginator;

  @ViewChild(MatSort) tableSort!: MatSort;

  @ViewChild(SearchComponent) searchComponent!: SearchComponent;

  getComponentConfigs(): BaseListComponentConfig<TaskDto> {
    return {
      //METHOD_LIST: ():Observable<Array<TaskDto>> => this.service.taskControllerListAll(),
      //METHOD_LIST_PAGED: (params, context) => this.service.taskControllerListAllPage(params, context),
      METHOD_REMOVE: (params, context) => this.service.taskControllerRemove(params, context),
      DELETE_ROLE: TaskRoles.DELETE,
      ENTITY_NAME_LABEL: 'Task',
      UPDATE_ROLE: TaskRoles.UPDATE,
      USE_EXTERNAL_SOURCE: true
    };
  }

  constructor(
    public service: TaskControllerService,
  ) {
    super();
  }

  getBaseURL(): string {
    return TaskPaths.TASK_PATH;
  }

  protected setFormCustomFields(userDto: TaskDto): void {
  }

  complete(value: TaskDto) {
    value.completed = !value.completed;

    this.service.taskControllerUpdate({id: value.id||0, body: value}).subscribe(
      {next: value1 => {
        const action = value1?.completed ? 'completada':'rebaerta';
        this.messageService.addMsgSuccess(`Task ${action}`);
        },
        error: err => {
          value.completed = !value.completed;
        }
      }
    )
  }

  protected readonly TaskPaths = TaskPaths;

  tarefasPendentes: boolean = false;

  changeTarefasPendentes() {
    if(this.tarefasPendentes){
      this.setListMethodPage(
        (params, context) => this.service.taskControllerListIncompletePage(params, context)
      );
      this.paginator.page.emit();
    }else {
      this.setListMethodPage(
        (params, context) => this.service.taskControllerListAllPage(params, context)
      );
      this.paginator.page.emit();
    }
  }

  override ngAfterViewInit() {
    super.ngAfterViewInit();
    if(this.tableSort){
      this.searchComponent.matSort = this.tableSort;
    }
  }
}


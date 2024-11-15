import { Component } from '@angular/core';
import {BaseComponent} from "../../../architecture/component/base.component";
import {CategoryDto} from "../../../api/models/category-dto";
import {TaskPaths, TaskRoles} from "../task-routing.module";

@Component({
  selector: 'app-home-task',
  templateUrl: './home-task.component.html',
  styleUrl: './home-task.component.scss'
})
export class HomeTaskComponent  extends BaseComponent<CategoryDto>{
  public HAS_PERMISSION_CREATE: boolean;
  constructor() {
    super();
    this.HAS_PERMISSION_CREATE = this.securityService.hasRoles(TaskRoles
      .CREATE);
  }

  getBaseURL(): string {
    return "./";
  }

  protected setFormCustomFields(userDto: CategoryDto): void {
  }

  protected readonly TaskPaths = TaskPaths;
}

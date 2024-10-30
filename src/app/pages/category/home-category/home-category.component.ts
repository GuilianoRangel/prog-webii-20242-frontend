import {ChangeDetectorRef, Component} from '@angular/core';
import {BaseComponent} from "../../../architecture/component/base.component";
import {ActivatedRoute, Router} from "@angular/router";
import {CrudActionService} from "../../../architecture/component/crud-action.service";
import {MessageService} from "../../../architecture/message/message.service";
import {ErrorService} from "../../../architecture/error.service";
import {SecurityService} from "../../../architecture/security/security.service";
import {FormBuilder} from "@angular/forms";
import {CategoryDto} from "../../../api/models/category-dto";
import {CategoryPaths, CategoryRoles} from "../category-routing.module";

@Component({
  selector: 'app-home-category',
  templateUrl: './home-category.component.html',
  styleUrl: './home-category.component.scss',
})
export class HomeCategoryComponent extends BaseComponent<CategoryDto>{
  public HAS_PERMISSION_CREATE: boolean;
  constructor() {
    super();
    this.HAS_PERMISSION_CREATE = this.securityService.hasRoles(CategoryRoles
      .CREATE);
  }

  getBaseURL(): string {
    return "./";
  }

  protected setFormCustomFields(userDto: CategoryDto): void {
  }

  protected readonly CategoryRoles = CategoryRoles;
}

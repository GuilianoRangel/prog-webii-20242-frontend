import {Component} from '@angular/core';
import {BaseComponent} from "../../../architecture/component/base.component";
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
  protected readonly CategoryPaths = CategoryPaths;
}

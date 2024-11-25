import {Component, OnInit} from '@angular/core';
import {CategoryControllerService} from "../../../api/services/category-controller.service";
import {CategoryDto} from "../../../api/models/category-dto";
import {MatTableDataSource} from "@angular/material/table";
import {BaseComponent} from "../../../architecture/component/base.component";
import {CategoryPaths, CategoryRoles} from "../category-routing.module";

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrl: './list-category.component.scss'
})
export class ListCategoryComponent extends BaseComponent<CategoryPaths> implements OnInit {
  dataSource: MatTableDataSource<CategoryDto> = new MatTableDataSource<CategoryDto>([]);
  displayedColumns =  ['id', 'name', 'action'];

  public HAS_PERMISSION_UPDATE: boolean;
  public HAS_PERMISSION_DELETE: boolean;

  constructor(
      public service: CategoryControllerService,
  ) {
    super();
    this.getData();
    this.HAS_PERMISSION_UPDATE = this.securityService.hasRoles(CategoryRoles.UPDATE);
    this.HAS_PERMISSION_DELETE = this.securityService.hasRoles(CategoryRoles.DELETE);

  }

  showResult($event: any[]) {
    this.confDataResult($event);
  }


  private getData() {
    this.service.categoryControllerListAll().subscribe(data => {
      this.confDataResult(data);
    });
  }

  private confDataResult(data: Array<CategoryDto>) {
    this.dataSource = new MatTableDataSource<CategoryDto>(data || []);
  }

  confirmDelete(categoryDto: CategoryDto) {
    this.messageService.addConfirmYesNo(`Confirmar a exclusão de: ${categoryDto.name} (ID: ${categoryDto.id})?`,() => {
      this.remover(categoryDto);
    });
  }

  remover(categoryDto: CategoryDto) {
    this.service.categoryControllerRemove({id: categoryDto.id || 0})
      .subscribe({next: returnValue => {
          this.getData();
          this.messageService.addMsgSuccess(`Categória: ${returnValue.name} Excluída com sucesso!!!`);
        }, error: error =>{
          if (error.status === 404) {
            this.messageService.addMsgInf("Categória não existe mais.");
          } else {
            this.messageService.addMsgDanger("Erro ao excluir"+error.message);
          }
        }
      });
  }

  getBaseURL(): string {
    return CategoryPaths.CATEGORY_PATH;
  }

  protected setFormCustomFields(userDto: CategoryPaths): void {
  }

  protected readonly CategoryRoles = CategoryRoles;
}

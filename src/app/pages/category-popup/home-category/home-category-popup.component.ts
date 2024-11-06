import {Component} from '@angular/core';
import {BaseComponent} from "../../../architecture/component/base.component";
import {CategoryDto} from "../../../api/models/category-dto";
import {CategoryPopupPaths, CategoryPopupRoles} from "../category-routing.module";
import {FormCategoryPopupComponent} from "../form-category/form-category-popup.component";
import {MatTableDataSource} from "@angular/material/table";
import {CategoryControllerService} from "../../../api/services/category-controller.service";

@Component({
  selector: 'app-home-category-popup',
  templateUrl: './home-category-popup.component.html',
  styleUrl: './home-category-popup.component.scss',
})
export class HomeCategoryPopupComponent extends BaseComponent<CategoryDto>{
  dataSource: MatTableDataSource<CategoryDto> = new MatTableDataSource<CategoryDto>([]);
  displayedColumns =  ['id', 'name', 'action'];

  public HAS_PERMISSION_CREATE: boolean;
  public HAS_PERMISSION_UPDATE: boolean;
  public HAS_PERMISSION_DELETE: boolean;

  constructor(
    public service: CategoryControllerService,
    ) {
    super();
    this.HAS_PERMISSION_CREATE = this.securityService.hasRoles(CategoryPopupRoles.CREATE);
    this.HAS_PERMISSION_UPDATE = this.securityService.hasRoles(CategoryPopupRoles.UPDATE);
    this.HAS_PERMISSION_DELETE = this.securityService.hasRoles(CategoryPopupRoles.DELETE);
    this.getData();
  }


  private getData() {
    this.service.categoryControllerListAll().subscribe(data => {
      data = data.sort((a, b) => (a?.id || 0) - (b?.id || 0))
      this.dataSource = new MatTableDataSource<CategoryDto>(data || []);
    });
  }

  confirmDelete(categoryDto: CategoryDto) {
    this.messageService.addConfirmYesNo(`Confirmar a exclusão de: ${categoryDto.name}?`,() => {
      this.remover(categoryDto);
    });
  }

  remover(categoryDto: CategoryDto) {
    this.errorService.handleLocalError();
    this.service.categoryControllerRemove({id: categoryDto.id || 0})
      .subscribe({next: returnValue => {
          this.getData();
          this.messageService.addMsgSuccess(`Categória: ${returnValue.name} Excluída!!!`);
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
    return "./";
  }

  protected setFormCustomFields(userDto: CategoryDto): void {
  }

  protected readonly CategoryRoles = CategoryPopupRoles;
  protected readonly CategoryPaths = CategoryPopupPaths;

  addCategoryPopup() {
    this.edit(0);
  }

  edit(id: number) {
    this.messageService.addDialogYesNo(
      FormCategoryPopupComponent,
      {id: id},  '',
      (data) => {
        this.getData();
      });
  }
}

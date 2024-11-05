import {Component} from '@angular/core';
import {CategoryControllerService} from "../../../api/services/category-controller.service";
import {BaseComponent} from "../../../architecture/component/base.component";
import {CategoryDto} from "../../../api/models/category-dto";
import {CategoryPaths} from "../category-routing.module";

@Component({
  selector: 'app-form-category',
  templateUrl: './form-category.component.html',
  styleUrl: './form-category.component.scss'
})
export class FormCategoryComponent extends BaseComponent<CategoryDto>{

  constructor(
    public categoryService: CategoryControllerService,
  ) {
    super();
    this.createForm();
    this.retriveAlterData()
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      name: [null, null],
    });
  }

  onSubmit() {
    if(this.formGroup.valid) {
      if (!this.pkValue) {
        this.errorService.handleLocalError();
        this.categoryService.categoryControllerCreate({body: this.formGroup.value})
          .subscribe({
            next: returnValue => {
              this.messageService.addMsgSuccess("Categoria(Nome: " + returnValue.name + ") incluída com sucesso!");
              this.router.navigate([this.baseURL]);
            },
            error: err => {
              this.messageService.addMsgDanger("Erro ao incluir categoria: " + err.message);
            }
          });
      } else {
        //Tratamento global de erro
        //this.errorService.handleLocalError();
        this.categoryService.categoryControllerUpdate({id: this.pkValue, body: this.formGroup.value})
          .subscribe({
            next: returnValue => {
              this.messageService.addMsgSuccess("Categoria(Nome: " + returnValue.name + ") alterada com sucesso!");
              this.router.navigate([this.baseURL]);
            }/*,
            error: err => {
              this.messageService.addMsgDanger("Erro ao alterar categoria: " + err.message);
            }*/
          });
      }
    }
  }

  private retriveAlterData() {
    const paramId = this.route.snapshot.paramMap.get('id');
    if (paramId){
      const codigo = parseInt(paramId);
      this.errorService.handleLocalError();
      this.categoryService.categoryControllerGetById({id: codigo}).subscribe({
        next: returnValue => {
          this.pkValue = returnValue.id;
          this.model = returnValue;
        },
        error: error => {
          this.messageService.addMsgWarning(`Erro ao buscar ID: ${codigo}, mensagem: ${error.error.message}`);
        }
      });
    }
  }

  override getBaseURL(): string {
    return CategoryPaths.BASE;
  }
  protected override setFormCustomFields(userDto: CategoryDto): void {
    //Utilizado quando se precisa definir algum campo quando se atribui a atributo this.base
  }
}

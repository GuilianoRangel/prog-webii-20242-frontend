import {ChangeDetectorRef, Component} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {CategoryControllerService} from "../../../api/services/category-controller.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MessageService} from "../../../architecture/message/message.service";
import {BaseComponent} from "../../../architecture/component/base.component";
import {CrudActionService} from "../../../architecture/component/crud-action.service";
import {ErrorService} from "../../../architecture/error.service";

@Component({
  selector: 'app-form-category',
  templateUrl: './form-category.component.html',
  styleUrl: './form-category.component.scss'
})
export class FormCategoryComponent extends BaseComponent{

  //public formGroup!: FormGroup;
  public baseURL = "/category";

  constructor(
    public override route: ActivatedRoute,
    public override router: Router,
    protected override changeDetector: ChangeDetectorRef,
    protected override crudActionService: CrudActionService,
    private formBuilder: FormBuilder,
    public categoryService: CategoryControllerService,
    public messageService: MessageService,
    public errorService: ErrorService,

  ) {
    super(route, router, changeDetector, crudActionService);
    this.createForm();
    //adicionado depois
    this.retriveAlterData()
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      name: [null, null],
    });
  }

  onSubmit() {
    console.log("formGroup", this.formGroup);
   /* this.categoryService.categoryControllerCreate({body: this.formGroup.value})
      .subscribe({
        next: returnValue => {
          this.messageService.addMsgSuccess("Categoria(Nome: "+returnValue.name+") incluída com sucesso!");
          this.router.navigate(['/category']);
        },
      error: err => {
          this.messageService.addMsgDanger("Erro ao incluir categoria: "+err.error.message);
      }});*/

    //alterado depois

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

  //passou para o componente base
  /*public handleError = (controlName: string, errorName: string) => {
    return this.formGroup.controls[controlName].hasError(errorName);
  };*/

  cancelar() {
      let confirmed = false;

      if (this.crudAction.isActionView()) {
      this.router.navigateByUrl(this.baseURL);
      confirmed = true;
    }

    if ( !confirmed ) {
      this.messageService.addConfirmYesNo('Confirmar operação?', () => {
        this.router.navigateByUrl(this.baseURL);
      });
    }
  }

  private retriveAlterData() {
    const paramId = this.route.snapshot.paramMap.get('id');
    if (paramId){
      const codigo = parseInt(paramId);
      console.log("codigo",paramId);
      this.errorService.handleLocalError();
      this.categoryService.categoryControllerGetById({id: codigo}).subscribe({
        next: returnValue => {
          console.log("retorno", returnValue);
          this.pkValue = returnValue.id;
          this.formGroup.patchValue(returnValue);
        },
        error: error => {
          this.messageService.addMsgWarning(`Erro ao buscar ID: ${codigo}, mensagem: ${error.error.message}`);
        }
      });
    }
  }
}

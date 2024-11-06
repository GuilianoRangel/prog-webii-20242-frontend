import {Component, Input} from '@angular/core';
import {CategoryControllerService} from "../../../api/services/category-controller.service";
import {BaseComponent} from "../../../architecture/component/base.component";
import {CategoryDto} from "../../../api/models/category-dto";
import {CategoryPopupPaths} from "../category-routing.module";
import {Validators} from "@angular/forms";
import {GenericDialogComponent} from "../../../architecture/message/generic-dialog/generic-dialog.component";

@Component({
  selector: 'app-form-category-popup',
  templateUrl: './form-category-popup.component.html',
  styleUrl: './form-category-popup.component.scss'
})
export class FormCategoryPopupComponent extends BaseComponent<CategoryDto>{
  @Input()
  public data!: CategoryDto;

  @Input()
  public dialogComponent?: GenericDialogComponent;

  constructor(
    public categoryService: CategoryControllerService,
  ) {
    super();
    this.createForm();
    //this.retriveAlterData()
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      name: [null, Validators.required],
    });
  }

  override cancelar() {
    let confirmed = false;

    if (this.crudAction.isActionView()) {
      this.dialogComponent?.onConfirmNo();
      confirmed = true;
    }

    if (!confirmed) {
      this.messageService.addConfirmYesNo('Confirmar operação?', () => {
        this.dialogComponent?.onConfirmNo();
      });
    }
  }

  onSubmit() {
    if(this.formGroup.valid) {
      if (!this.pkValue) {
        this.categoryService.categoryControllerCreate({body: this.formGroup.value})
          .subscribe({
            next: returnValue => {
              this.messageService.addMsgSuccess("Categoria incluída com sucesso!");
              this.dialogComponent?.onConfirmYesOk()
            }
          });
      } else {
        this.categoryService.categoryControllerUpdate({id: this.pkValue, body: this.formGroup.value})
          .subscribe({
            next: returnValue => {
              this.messageService.addMsgSuccess("Categoria alterada com sucesso!");
              this.dialogComponent?.onConfirmYesOk()
            }
          });
      }
    }
  }

  private retriveAlterData() {
    if (this.pkValue){
      const pk = parseInt(this.pkValue);
      this.categoryService.categoryControllerGetById({id: pk}).subscribe({
        next: returnValue => {
          this.pkValue = returnValue.id;
          this.model = returnValue;
        },error: err => {
          //está utilizando o tratamento global para mostrar mensagem e a ação localmente aqui
          this.pkValue = 0;
        }
      });
    }
  }

  override getBaseURL(): string {
    return CategoryPopupPaths.BASE;
  }
  protected override setFormCustomFields(userDto: CategoryDto): void {
  }

  override ngOnInit(): void {
    super.ngOnInit();
    //this.formGroup.patchValue(this.data);
    this.pkValue = this.data.id;
    this.retriveAlterData();
  }
}

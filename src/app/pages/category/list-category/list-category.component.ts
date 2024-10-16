import {Component, OnInit} from '@angular/core';
import {CategoryControllerService} from "../../../api/services/category-controller.service";
import {CategoryDto} from "../../../api/models/category-dto";
import {MatTableDataSource} from "@angular/material/table";
import {MessageService} from "../../../architecture/message/message.service";

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrl: './list-category.component.scss'
})
export class ListCategoryComponent implements OnInit {
  dataSource: MatTableDataSource<CategoryDto> = new MatTableDataSource<CategoryDto>([]);
  displayedColumns =  ['id', 'name', 'action'];

  constructor(
      public service: CategoryControllerService,
      public messageService: MessageService
  ) {
  }

  ngOnInit(): void {
    this.getData();
  }

  private getData() {
    this.service.categoryControllerListAll().subscribe(data => {
      console.log(data);
      this.dataSource = new MatTableDataSource<CategoryDto>(data || []);
    });
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
            console.log("Erro:", error);
          }
        }
      });
  }
}

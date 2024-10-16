import {ChangeDetectorRef, Component} from '@angular/core';
import {BaseComponent} from "../../../architecture/component/base.component";
import {ActivatedRoute, Router} from "@angular/router";
import {CrudActionService} from "../../../architecture/component/crud-action.service";

@Component({
  selector: 'app-home-category',
  templateUrl: './home-category.component.html',
  styleUrl: './home-category.component.scss',
})
/*export class HomeCategoryComponent {
}*/
//depois
export class HomeCategoryComponent extends BaseComponent{
  constructor(
    protected override route: ActivatedRoute,
    protected override router: Router,
    protected override changeDetector: ChangeDetectorRef,
    protected override crudActionService: CrudActionService
  ) {
    super(route, router, changeDetector, crudActionService);
  }
}

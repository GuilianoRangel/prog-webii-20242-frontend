import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeCategoryComponent} from './home-category/home-category.component';
import {ListCategoryComponent} from './list-category/list-category.component';
import {FormCategoryComponent} from './form-category/form-category.component';
import {RouterModule} from "@angular/router";
import {categoryRoutes} from "./category-routing.module";
import {SharedMaterialModule} from "../../architecture/shared-material/shared-material.module";
import {SearchModule} from "../../architecture/search-module/search.module";


@NgModule({
  declarations: [
    HomeCategoryComponent,
    ListCategoryComponent,
    FormCategoryComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(categoryRoutes),
        SharedMaterialModule,
        SearchModule
    ]
})
export class CategoryModule { }

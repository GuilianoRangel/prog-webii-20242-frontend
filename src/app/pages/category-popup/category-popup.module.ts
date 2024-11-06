import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeCategoryPopupComponent} from './home-category/home-category-popup.component';
import {FormCategoryPopupComponent} from './form-category/form-category-popup.component';
import {RouterModule} from "@angular/router";
import {categoryPopupRoutes} from "./category-routing.module";
import {SharedMaterialModule} from "../../architecture/shared-material/shared-material.module";


@NgModule({
  declarations: [
    HomeCategoryPopupComponent,
    FormCategoryPopupComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(categoryPopupRoutes),
    SharedMaterialModule
  ]
})
export class CategoryPopupModule { }

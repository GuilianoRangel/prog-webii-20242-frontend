import { ResolveFn } from '@angular/router';
import {inject} from "@angular/core";
import {Observable} from "rxjs";
import {CategoryDto} from "../../api/models/category-dto";
import {CategoryControllerService} from "../../api/services";

export const CategoryResolver: ResolveFn<CategoryDto[]> = (route, state):Observable<CategoryDto[]> => {
  const categoryService = inject(CategoryControllerService);
  return categoryService.categoryControllerListAll()
};

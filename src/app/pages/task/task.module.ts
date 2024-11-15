import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeTaskComponent} from './home-task/home-task.component';
import {ListTaskComponent} from './list-task/list-task.component';
import {FormTaskComponent} from './form-task/form-task.component';
import {RouterModule} from "@angular/router";
import {SharedMaterialModule} from "../../architecture/shared-material/shared-material.module";
import {taskRoutes} from "./task-routing.module";
import {MatCheckbox} from "@angular/material/checkbox";
import {ArchitectureModule} from "../../architecture/architecture.module";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";


@NgModule({
  declarations: [
    HomeTaskComponent,
    ListTaskComponent,
    FormTaskComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(taskRoutes),
    SharedMaterialModule,
    MatCheckbox,
    ArchitectureModule,
    MatDatepicker,
    MatDatepickerToggle,
    MatDatepickerInput
  ]
})
export class TaskModule { }

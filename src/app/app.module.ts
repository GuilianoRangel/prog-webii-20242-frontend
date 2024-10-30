import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './core/home/home.component';
import {SharedMaterialModule} from "./architecture/shared-material/shared-material.module";
import {CategoryModule} from "./pages/category/category.module";
import {ArchitectureModule} from "./architecture/architecture.module";
import {CommandModule} from "@angular/cli/src/command-builder/command-module";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSidenavContainer} from "@angular/material/sidenav";
import {SecurityModule} from "./architecture/security/security.module";
import {environment} from "../environments/environment";
import {ApiModule} from "./api/api.module";
import {MessageModule} from "./architecture/message/message.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ArchitectureModule,
        CategoryModule,
        SharedMaterialModule,
        ArchitectureModule,


        SecurityModule.forRoot({
            nameStorage: environment.nameStorage,
            loginRouter: '/auth/login'
        }),
        ApiModule.forRoot({rootUrl: environment.apiUrl}),
        MessageModule,
    ],
  bootstrap: [AppComponent],
})
export class AppModule { }

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './core/home/home.component';
import {SharedMaterialModule} from "./architecture/shared-material/shared-material.module";
import {CategoryModule} from "./pages/category/category.module";
import {ArchitectureModule} from "./architecture/architecture.module";
import {SecurityModule} from "./architecture/security/security.module";
import {environment} from "../environments/environment";
import {ApiModule} from "./api/api.module";
import {MessageModule} from "./architecture/message/message.module";
import {CategoryPopupModule} from "./pages/category-popup/category-popup.module";

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
        CategoryPopupModule,
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

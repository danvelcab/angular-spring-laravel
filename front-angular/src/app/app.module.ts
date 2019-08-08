import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyService } from '../services/company.service';
import { environment } from '../environments/environment';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiRestCoreModule } from 'bl-api-rest-core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApiRestCoreModule.forRoot(environment)
  ],
  providers: [
    CompanyService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

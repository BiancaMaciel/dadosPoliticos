import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DeputadosComponent } from './deputados/deputados.component';
import { DeputadosModule } from './deputados/deputados.module';

@NgModule({
  declarations: [
    AppComponent,
    DeputadosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DeputadosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TituloComponent } from './componentes/titulo/titulo.component';
import { SumarComponent } from './componentes/sumar/sumar.component';
import { RestarComponent } from './componentes/restar/restar.component';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    SumarComponent,
    RestarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

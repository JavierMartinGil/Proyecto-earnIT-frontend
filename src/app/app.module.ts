import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeroComponent } from './hero/hero.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { ClaimIndexComponent } from './claim-index/claim-index.component';
import { IndexComponent } from './index/index.component';
import { LogosComponent } from './logos/logos.component';
import { FooterComponent } from './footer/footer.component';
import { ColaboraComponent } from './colabora/colabora.component';
import { ComparaComponent } from './compara/compara.component';
import { FormcompComponent } from './formcomp/formcomp.component';
import { TablaresultadosComponent } from './tablaresultados/tablaresultados.component';
import { FormcolComponent } from './formcol/formcol.component';
import { Error404Component } from './error404/error404.component';
import { GraciasComponent } from './gracias/gracias.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeroComponent,
    PresentacionComponent,
    ClaimIndexComponent,
    IndexComponent,
    LogosComponent,
    FooterComponent,
    ColaboraComponent,
    ComparaComponent,
    FormcompComponent,
    TablaresultadosComponent,
    FormcolComponent,
    Error404Component,
    GraciasComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

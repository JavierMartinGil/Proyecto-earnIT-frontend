import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeroComponent } from './hero/hero.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { ClaimIndexComponent } from './claim-index/claim-index.component';
import { IndexComponent } from './index/index.component';
import { LogosComponent } from './logos/logos.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeroComponent,
    PresentacionComponent,
    ClaimIndexComponent,
    IndexComponent,
    LogosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

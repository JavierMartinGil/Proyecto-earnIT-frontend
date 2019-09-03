import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ColaboraComponent } from './colabora/colabora.component';
import { ComparaComponent } from './compara/compara.component';
import { Error404Component } from './error404/error404.component';
import { GraciasComponent } from './gracias/gracias.component'





const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'colabora', component: ColaboraComponent },
  { path: 'compara', component: ComparaComponent },
  { path: 'gracias', component: GraciasComponent },
  { path: '**', component: Error404Component }
];


@NgModule({

  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // Add options right here
    })
  ],
  exports: [RouterModule]

})




export class AppRoutingModule { }

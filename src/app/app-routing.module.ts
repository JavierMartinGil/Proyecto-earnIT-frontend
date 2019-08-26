import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ColaboraComponent } from './colabora/colabora.component';
import { ComparaComponent } from './compara/compara.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'colabora', component: ColaboraComponent },
  { path: 'compara', component: ComparaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

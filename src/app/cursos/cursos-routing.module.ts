import { CursosTaguatingaComponent } from './cursos-taguatinga/cursos-taguatinga.component';
import { CursosAsaNorteComponent } from './cursos-asa-norte/cursos-asa-norte.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'cursos-asa-norte', component: CursosAsaNorteComponent},
  {path: 'cursos-taguatinga', component: CursosTaguatingaComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosAsaNorteComponent } from './cursos-asa-norte/cursos-asa-norte.component';
import { CursosTaguatingaComponent } from './cursos-taguatinga/cursos-taguatinga.component';


@NgModule({
  declarations: [
    CursosAsaNorteComponent,
    CursosTaguatingaComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonitoresRoutingModule } from './monitores-routing.module';
import { MonitoresAsaNorteComponent } from './monitores-asa-norte/monitores-asa-norte.component';
import { MonitoresTaguatingaComponent } from './monitores-taguatinga/monitores-taguatinga.component';
import { MonitoresOnlineComponent } from './monitores-online/monitores-online.component';


@NgModule({
  declarations: [
    MonitoresAsaNorteComponent,
    MonitoresTaguatingaComponent,
    MonitoresOnlineComponent
  ],
  imports: [
    CommonModule,
    MonitoresRoutingModule
  ]
})
export class MonitoresModule { }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  topicos_monitores: any[] = [
    {nome: 'Monitores Asa Norte', rota: '/monitores/monitores-asa-norte'},
    {nome: 'Monitores Taguatinga', rota: '/monitores/monitores-taguatinga'},
  ]

  topicos_minicursos: any[] = [
    {nome: 'Minicurso Asa Norte', rota: '/cursos/cursos-asa-norte'},
    {nome: 'Minicurso Taguatinga', rota: '/cursos/cursos-taguatinga'},
  ]

  topicos_monitoria_online: any[] = [
    {nome: 'Monitoria Online', rota: '/monitores/monitores-online'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

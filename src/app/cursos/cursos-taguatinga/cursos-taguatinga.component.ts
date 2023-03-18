import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos-taguatinga',
  templateUrl: './cursos-taguatinga.component.html',
  styleUrls: ['./cursos-taguatinga.component.scss']
})
export class CursosTaguatingaComponent implements OnInit {

  cursos: any[] = [
    {nome: 'Banco de Dados Básico', periodo: '24/10/22 a 04/11/22', avaliacao: '04/11/22', horario: 'das 11h às 12h30', sala: "", inscricao:'Encerrado'},
    {nome: 'Linguagem C Básico', periodo: '12/09/22 a 23/09/22', avaliacao: '23/09/22', horario: 'das 11h às 12h30', sala: "", inscricao:'Encerrado'},
    {nome: 'Linguagem Python Básico', periodo: '14/11/22 a 25/11/22', avaliacao: '25/11/22', horario: 'das 11h às 12h30', sala: "174", inscricao:'https://forms.gle/JTYLquPEGru3nJWP6'},
    {nome: 'Linguagem Python Básico', periodo: '12/11, 19/11 e 26/11/22', avaliacao: '26/11/22', horario: '9h às 12h, aos sábados', sala: "193", inscricao:'https://forms.gle/xhSFLZojuwgMj3219'}

  ]

  constructor() { }

  ngOnInit(): void {
  }

}

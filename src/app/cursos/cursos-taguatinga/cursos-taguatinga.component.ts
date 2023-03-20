import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos-taguatinga',
  templateUrl: './cursos-taguatinga.component.html',
  styleUrls: ['./cursos-taguatinga.component.scss']
})
export class CursosTaguatingaComponent implements OnInit {

  cursos: any[] = [
    {nome: 'Linguagem C Básico', periodo: ' 27/03/23 a 10/04/23', avaliacao: '10/04/23', horario: '11h às 12h30', sala: "174", inscricao:'https://forms.gle/vDHycMrNXw6eYTEG7 '},
    {nome: 'Linguagem C Básico', periodo: '25/03/23, 01/04/23 e 15/04/23', avaliacao: '15/04/23', horario: '9h às 12h', sala: "174", inscricao:'https://forms.gle/8MpBw6ozW2P3YkdA8 '},
    {nome: 'Linguagem Java Básico', periodo: '24/04/23 a 05/05/23', avaliacao: '05/05/23', horario: 'das 11h às 12h30', sala: "", inscricao:''},
    {nome: 'Linguagem Java Básico', periodo: '29/04/23, 06/05/23 e 13/05/23', avaliacao: '13/05/23', horario: '9h às 12h', sala: "", inscricao:''},
    {nome: 'Linguagem Python Básico', periodo: ' 22/05/23 a 02/06/23', avaliacao: '02/06/23', horario: '11h às 12h30', sala: "", inscricao:''},
    {nome: 'Linguagem Python Básico', periodo: '20/05/23, 27/05/23 e 03/06/23', avaliacao: '17/06/23', horario: '9h às 12h', sala: "", inscricao:''}

  ]

  constructor() { }

  ngOnInit(): void {
  }

}

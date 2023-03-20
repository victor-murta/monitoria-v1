import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos-asa-norte',
  templateUrl: './cursos-asa-norte.component.html',
  styleUrls: ['./cursos-asa-norte.component.scss']
})
export class CursosAsaNorteComponent implements OnInit {

  cursos: any[] = [
    {nome: 'Linguagem C Básico', periodo: '27/03/23 a 10/04/23', avaliacao: '10/04/23', horario: '17h30 às 19h', sala: '8202, bloco 8', inscricao:'https://forms.gle/rCYPPRD1PDQC5YjAA'},
    {nome: ' HTML e CSS Básico', periodo: '24/04/23 a 05/05/23', avaliacao: '05/05/23', horario: 'das 17h30 às 19h', sala: '', inscricao:''},
    {nome: 'Linguagem Python Básico', periodo: '22/05/23 a 02/06/23', avaliacao: '02/06/23', horario: '17h30 às 19h', sala: '', inscricao:''}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

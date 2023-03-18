import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos-asa-norte',
  templateUrl: './cursos-asa-norte.component.html',
  styleUrls: ['./cursos-asa-norte.component.scss']
})
export class CursosAsaNorteComponent implements OnInit {

  cursos: any[] = [
    {nome: 'Linguagem C Básico', periodo: '12/09/22 a 23/09/22', avaliacao: '23/09/22', horario: 'das 17h30 às 19h', sala: '', inscricao:'Encerrado'},
    {nome: 'Linux Básico', periodo: '24/10/22 a 04/11/22', avaliacao: '04/11/22', horario: 'das 17h30 às 19h', sala: '', inscricao:'Encerrado'},
    {nome: 'Linguagem Python Básico', periodo: '14/11/22 a 25/11/22', avaliacao: '25/11/22', horario: 'das 17h30 às 19h', sala: '5100', inscricao:'https://forms.gle/SZsscoLoZbWBEksi9'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

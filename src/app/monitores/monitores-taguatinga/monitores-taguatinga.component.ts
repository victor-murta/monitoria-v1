import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monitores-taguatinga',
  templateUrl: './monitores-taguatinga.component.html',
  styleUrls: ['./monitores-taguatinga.component.scss']
})
export class MonitoresTaguatingaComponent implements OnInit {


  monitores: any[] = [
    {nome: "Christian Viana de Souza", email: "christian.vs@sempreceub.com"},
    {nome: "André Gustavo de Oliveira dos Santos", email: "andreugabagos@sempreceub.com"},
    {nome: "Davi Siqueira Corrêa Galati", email: "davigalati@gmail.com"},
    {nome: "Paulo Victor de Souza Gomes", email: "paulo.vg@sempreceub.com"},
    {nome: "Pedro Rafael Faria Ferreira", email: "pedro.rafael@sempreceub.com"},
  ]

  monitores_online: any[] = [
    {nome: "Enzo Alves Miranda Leite", email: "enzo0402@sempreceub.com"},
    {nome: "Jeferson Marques Rodrigues", email: "joedf1006@sempreceub.com"},
  ]


  constructor() { }

  ngOnInit(): void {
  }

}

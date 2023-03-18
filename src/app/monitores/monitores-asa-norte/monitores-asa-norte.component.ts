import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monitores-asa-norte',
  templateUrl: './monitores-asa-norte.component.html',
  styleUrls: ['./monitores-asa-norte.component.scss']
})
export class MonitoresAsaNorteComponent implements OnInit {


  monitores: any[] = [
    {nome: "Francisco Pena Cunha", email: "francisco.pc@sempreceub.com"},
    {nome: "Guilherme Henrique Paes Zioli Fernandes", email: "Guilhermehzf@gmail.com"},
    {nome: "Arthur Arash Briceno Heidari", email: "arthur.arash@sempreceub.com"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

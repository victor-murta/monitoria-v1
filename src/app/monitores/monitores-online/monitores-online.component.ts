import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monitores-online',
  templateUrl: './monitores-online.component.html',
  styleUrls: ['./monitores-online.component.scss']
})

export class MonitoresOnlineComponent implements OnInit {

  monitores_online: any[] = [
    {nome: "Enzo Alves Miranda Leite", email: "enzo0402@sempreceub.com", link: "https://meet.google.com/ztw-hcra-yxb"},
    {nome: "Jeferson Marques Rodrigues", email: "joedf1006@sempreceub.com", link: "https://meet.google.com/ztw-hcra-yxb"},
  ]


  constructor() { }

  ngOnInit(): void {
  }

}

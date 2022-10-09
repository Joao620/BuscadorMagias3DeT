import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Escolas, NomeEscolas} from "../types/Escolas"
import Pesquisa from "../types/Pesquisa"

@Component({
  selector: 'app-procurar-magias',
  templateUrl: './procurar-magias.component.html',
  styleUrls: ['./procurar-magias.component.sass']
})
export class ProcurarMagiasComponent implements OnInit {
  listaEscolas = [
    Escolas.agua,
    Escolas.terra,
    Escolas.fogo,
    Escolas.ar,
    Escolas.espirito,
    Escolas.branca,
    Escolas.negra,
  ];

  @Output()
  fazerPesquisa = new EventEmitter<Pesquisa>();

  nomeEscolas = NomeEscolas

  constructor() { 
  }

  ngOnInit(): void {
  }
  
  onSubmit(form: NgForm) {
    const value = form.form.value

    const escolasPesquisa: Escolas[] = []
    this.listaEscolas.forEach((escola) => {
      if(value[escola] === true) escolasPesquisa.push(escola)
    })

    const pesquisa: Pesquisa = {
      texto: value.pesquisaNome,
      escolas: escolasPesquisa,
      custoMaximo: value.custoMaximo,
      custoMinimo: value.custoMinimo
    }

    this.fazerPesquisa.emit(pesquisa)
  }

}

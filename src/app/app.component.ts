import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Subject } from 'rxjs';
import { Escolas, MinificadoEscolas } from './types/Escolas';
import { Magia } from './types/Magia';
import magiasBaixadas from '../assets/teste123.json'
import Pesquisa from './types/Pesquisa';
import lunr from 'lunr';

// @ts-ignore 
import stemmer from 'lunr-languages/lunr.stemmer.support'
// @ts-ignore 
import lunrLang from 'lunr-languages/lunr.pt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'magias-site';
  magiasSendoMostradas: BehaviorSubject<Magia[]> = new BehaviorSubject(magiasBaixadas);
  indexLunr: lunr.Index;

  constructor() {
    stemmer(lunr)
    lunrLang(lunr)

    this.indexLunr = lunr(function () {
      //@ts-expect-error
      this.use(lunr.pt)
      this.field('nome', { boost: 10 })
      this.field('descricao')
      this.ref('_index')

      magiasBaixadas.forEach((magia, i) => {
        //@ts-expect-error parametro escondido, para com isso
        magia._index = i;
        this.add(magia)
      })
    })

  }

// Pega nois 
  fazerPesquisa(pesquisa: Pesquisa): void {
    if (!pesquisa) return;

    let resultado: Magia[] = magiasBaixadas;
    console.time()
    if(pesquisa.texto != ''){
      const queryLunr = this.indexLunr.search(pesquisa.texto);
      resultado = queryLunr.map(item => magiasBaixadas[item.ref as unknown as number])
    }

    if(pesquisa.escolas.length != 0){
      resultado = resultado.filter((item) =>
        pesquisa.escolas.some((escola) => item.escolaMinificada.includes(MinificadoEscolas[escola]))
      )
    }

    this.magiasSendoMostradas.next(resultado)
    console.timeEnd();
  }

  ngOnInit(): void { }
}

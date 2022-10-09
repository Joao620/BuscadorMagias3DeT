import { Pipe, PipeTransform } from '@angular/core';
import { Escolas, NomeEscolas } from '../types/Escolas';

@Pipe({
  name: 'escolaParaNomeEscola'
})
export class EscolaParaNomeEscolaPipe implements PipeTransform {

  transform(value: Escolas): unknown {
    return NomeEscolas[value];
  }

}

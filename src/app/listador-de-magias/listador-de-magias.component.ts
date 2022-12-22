import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Subject } from 'rxjs';
import { Magia } from '../types/Magia';

@Component({
  selector: 'app-listador-de-magias',
  templateUrl: './listador-de-magias.component.html',
  styleUrls: ['./listador-de-magias.component.sass']
})
export class ListadorDeMagiasComponent implements OnInit {
  @Input() magiasSendoMostradas!: BehaviorSubject<Magia[]>;
  @ViewChild('containerMagias') containerMagias!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.magiasSendoMostradas.subscribe(() => {
      if (this.containerMagias.nativeElement instanceof HTMLElement) {
        this.containerMagias.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start'})
      }
    })
  }

  trackByMethod(index: number, el: Magia): number {
    return this.TSH(el.nome);
  }

  TSH(s: string) {
    for (var i = 0, h = 9; i < s.length;)
      h = Math.imul(h ^ s.charCodeAt(i++), 9 ** 9);
    return h ^ h >>> 9
  }


}

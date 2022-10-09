import { Component, Input, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { Magia } from '../types/Magia';

@Component({
  selector: 'app-elemento-magia',
  templateUrl: './elemento-magia.component.html',
  styleUrls: ['./elemento-magia.component.sass']
})
export class ElementoMagiaComponent implements AfterViewInit {
  rem = parseFloat(getComputedStyle(document.documentElement).fontSize);

  @Input() magia!: Magia;
  @ViewChild('texto') texto!: ElementRef;
  grandao!: boolean;

  expandido: boolean = false; 

  constructor() { }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.grandao = this.texto.nativeElement.getBoundingClientRect().height > this.rem * 10;
    })
  }
  
  ngOnInit(): void {
  }

  abrirTexto(texto: HTMLElement): void {
    this.expandido = true
  }

}

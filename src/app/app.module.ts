import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProcurarMagiasComponent } from './procurar-magias/procurar-magias.component';
import { EscolaParaNomeEscolaPipe } from './Pipes/escola-para-nome-escola.pipe';
import { ListadorDeMagiasComponent } from './listador-de-magias/listador-de-magias.component';
import { FormsModule } from '@angular/forms';
import { ElementoMagiaComponent } from './elemento-magia/elemento-magia.component';

@NgModule({
  declarations: [
    AppComponent,
    ProcurarMagiasComponent,
    EscolaParaNomeEscolaPipe,
    ListadorDeMagiasComponent,
    ElementoMagiaComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

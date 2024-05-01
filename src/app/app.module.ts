import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/pokemons/card/card.component';
import { ModalComponent } from './components/modal/modal.component';
import { PokemonsDetailsComponent } from './components/pokemons/pokemons-details/pokemons-details.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ModalComponent,
    PokemonsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

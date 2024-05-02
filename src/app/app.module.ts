import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/pokemons/card/card.component';
import { PokemonsDetailsComponent } from './components/pokemons/pokemons-details/pokemons-details.component';
import { PokemonsFormComponent } from './components/pokemons/pokemons-form/pokemons-form.component';
import { PokemonInfService} from './services/pokemonInfService/pokemon-inf.service'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    PokemonsDetailsComponent,
    PokemonsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    PokemonInfService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

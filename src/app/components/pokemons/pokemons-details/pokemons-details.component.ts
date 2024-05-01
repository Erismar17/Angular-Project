import { Component } from '@angular/core';
import { PokemonInfService } from '../../../services/pokemonInfService/pokemon-inf.service';
import { Pokemon } from 'src/app/models/pokemon';
@Component({
  selector: 'app-pokemons-details',
  templateUrl: './pokemons-details.component.html',
  styleUrls: ['./pokemons-details.component.css']
})
export class PokemonsDetailsComponent {
  pokemons: Pokemon[] = [];

  constructor (
    public pokemonService: PokemonInfService
  ) {

  }

  ngOnInit(): void {
    /* this.pokemons = this.pokemonService.getPokemonById(); */
  }
}
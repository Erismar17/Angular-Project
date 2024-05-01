import { Injectable } from '@angular/core';
import { Pokemon } from '../../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonInfService {
  pokemons: Pokemon[];
  constructor() {
    this.pokemons = [ ];
  }

  getPokemon () {
    // localStorage.removeItem('pokemons');
    if (localStorage.getItem('pokemons') === null) {
      return this.pokemons;
    } else {
      this.pokemons = JSON.parse(localStorage.getItem('pokemons')||'');
      return this.pokemons;
    }
  }

  addPokemon(pokemon: Pokemon) {
    let pokemons: Pokemon[] = [];
    if (localStorage.getItem('pokemons') === null) {
      pokemons.push(pokemon)
      localStorage.setItem('pokemons', JSON.stringify(pokemons));
    } else {
      pokemons = JSON.parse(localStorage.getItem('pokemons')||'');
      pokemons.push(pokemon);
      localStorage.setItem('pokemons', JSON.stringify(pokemons));
    }
  }

  getPokemonById () {
    this.pokemons.filter((pokemon)=>pokemon.pokemonNumber == 19)
  }
}
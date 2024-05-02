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
    this.pokemons.push(pokemon);
    let pokemons: Pokemon[] = [];
    if (localStorage.getItem('pokemons') === null) {
      pokemons.push(pokemon)
      localStorage.setItem('pokemons', JSON.stringify(pokemons));
      window.location.reload();
    } else {
      pokemons = JSON.parse(localStorage.getItem('pokemons')||'');
      pokemons.push(pokemon);
      localStorage.setItem('pokemons', JSON.stringify(pokemons));
      window.location.reload();
    }
  }

  getPokemonById (id: number) {
    if (localStorage.getItem('pokemons') === null) {
      return this.pokemons;
    } else {
      this.pokemons = JSON.parse(localStorage.getItem('pokemons')||'');
      let pokemon = this.pokemons.filter(p => p.pokemonNumber === id)
      if (pokemon == null) {
        return null;
      }
      return pokemon;
    }
  }
}
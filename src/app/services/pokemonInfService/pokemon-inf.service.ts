import { Injectable } from '@angular/core';
import { Pokemon } from '../../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonInfService {
  pokemons: Pokemon[];
  constructor() {
    this.pokemons = [
      {
        pokemonNumber: 1,
        pokemonNumberByRegion: 2,
        pokemonName: 'Ara',
        pokemonType: 'Agua'
      },
      {
        pokemonNumber: 124,
        pokemonNumberByRegion: 543,
        pokemonName: 'Flamita',
        pokemonType: 'Fuego'
      },      
      {
        pokemonNumber: 239,
        pokemonNumberByRegion: 263,
        pokemonName: 'Terra',
        pokemonType: 'Tierra'
      },
      {
        pokemonNumber: 19,
        pokemonNumberByRegion: 19,
        pokemonName: 'Andrés',
        pokemonType: 'Fuego'
      },
    ];
  }

  getPokemon () {
    return this.pokemons;
  }

  addPokemon(pokemon: Pokemon) {
    this.pokemons.push(pokemon);
    return false;
  }

  getPokemonById () {
    this.pokemons.filter((pokemon)=>pokemon.pokemonNumber == 19)
  }
}
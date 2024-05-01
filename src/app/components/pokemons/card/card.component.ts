import { Component, OnInit } from '@angular/core';
import { PokemonInfService } from '../../../services/pokemonInfService/pokemon-inf.service';
import { Pokemon } from '../../../models/pokemon';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  pokemons: Pokemon[] = [];

  constructor (
    public pokemonService: PokemonInfService
  ) {

  }

  ngOnInit(): void {
    this.pokemons = this.pokemonService.getPokemon();
  }
}
import { Component } from '@angular/core';
import { PokemonInfService } from '../../../services/pokemonInfService/pokemon-inf.service';
import { Pokemon } from 'src/app/models/pokemon';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-pokemons-details',
  templateUrl: './pokemons-details.component.html',
  styleUrls: ['./pokemons-details.component.css']
})
export class PokemonsDetailsComponent {
  getPokemonById: Pokemon[] = [];
  parameter: string = '';
  id: number = -1;
  constructor (
    public pokemonService: PokemonInfService,
    private route: ActivatedRoute,
  ) {

  }

  ngOnInit(): void {
    this.parameter = this.route.snapshot.paramMap.get('id')||'';
    this.id = parseInt(this.parameter);
    this.getPokemonById = this.pokemonService.getPokemonById(this.id)||[];
  }
}
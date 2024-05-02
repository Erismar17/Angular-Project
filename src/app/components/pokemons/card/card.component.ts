import { Component, OnInit } from '@angular/core';
import { PokemonInfService } from '../../../services/pokemonInfService/pokemon-inf.service';
import { Pokemon } from '../../../models/pokemon';
import { Observable } from 'rxjs';
import { PokemonFilterService } from 'src/app/services/pokemonFilter/pokemon-filter.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  pokemons: Pokemon[] = [];
  type = [
    "Acero",
    "Agua",
    "Bicho",
    "Dragon",
    "Electrico",
    "Fantasma",
    "Fuego",
    "Hada",
    "Hielo",
    "Lucha",
    "Normal",
    "Planta",
    "Psiquico",
    "Roca",
    "Siniestro",
    "Tierra",
    "Veneno",
    "Volador",
  ];

  filteredPokemons!: Observable<Pokemon[]>;
  constructor (
    public pokemonService: PokemonInfService,
    private pokemonFilterS: PokemonFilterService,
  ) { }

  ngOnInit(): void {
    this.pokemons = this.pokemonService.getPokemon();
    this.filteredPokemons = this.pokemonFilterS.getSearch().pipe(
      map((term: string) => {
          const termInt = parseInt(term, 10);
          if (this.type.includes(term) ) {
            return this.pokemons.filter(p =>
              p.pokemonType === term );
          };
          if (isNaN(termInt)) {
            return this.pokemons.filter(p =>
              p.pokemonName.toLowerCase().includes(term.toLowerCase())
            );
          } else {
            return this.pokemons.filter(p =>
            p.pokemonNumber === termInt );
        }
      })
    );
  }
}
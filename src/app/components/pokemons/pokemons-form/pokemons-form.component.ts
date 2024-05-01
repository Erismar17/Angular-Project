import { Component } from '@angular/core';
import { ModalSwitchService } from 'src/app/services/modalService/modal-switch.service';
import { PokemonInfService } from '../../../services/pokemonInfService/pokemon-inf.service';

@Component({
  selector: 'pokemons-form',
  templateUrl: './pokemons-form.component.html',
  styleUrls: ['./pokemons-form.component.css']
})
export class PokemonsFormComponent {
  constructor(
    public pokemonService: PokemonInfService,
    private modalSwitchS: ModalSwitchService) {

  }

  ngOnInit(): void {
    
  }

  closeModal () {
    this.modalSwitchS.$modal.emit(false);
  }

  addPokemon (pokemonNumber: HTMLInputElement,
              pokemonNumberByRegion: HTMLInputElement,
              pokemonImg: HTMLInputElement,
              pokemonName: HTMLInputElement,
              pokemonType: HTMLSelectElement) {
                this.pokemonService.addPokemon({
                  pokemonNumber: parseInt(pokemonNumber.value),
                  pokemonNumberByRegion: parseInt(pokemonNumberByRegion.value),
                  pokemonName: pokemonName.value,
                  pokemonType: pokemonType.value
                });
    this.closeModal();
    window.location.reload();
    return false;
  }
}
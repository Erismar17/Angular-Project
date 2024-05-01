import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/pokemons/card/card.component';
import { PokemonsDetailsComponent } from './components/pokemons/pokemons-details/pokemons-details.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-pokemons',
    pathMatch: 'full',
  },
  {
    path: 'list-pokemons',
    component: CardComponent
  },
  {
    path: 'detail-pokemon',
    component: PokemonsDetailsComponent
  },
  {
    path: '**',
    redirectTo: 'list-pokemons',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

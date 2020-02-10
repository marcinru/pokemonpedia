import { Component, OnInit } from '@angular/core';
import { PokemonCard } from '../pokemon-card/pokemon-card.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons: PokemonCard[];

  constructor() { }

  ngOnInit() {
    this.pokemons = [
      {
        name: 'Pikachu',
        url: 'https://pokeapi.co/api/v2/pokemon/25/'
      },
      {
        name: 'Bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon/1/'
      },
      {
        name: 'Charmander',
        url: 'https://pokeapi.co/api/v2/pokemon/4/'
      }
    ];
  }

}

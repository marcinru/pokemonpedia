import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon-card/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[];

  constructor() { }

  ngOnInit() {
    this.pokemons = [
      {
        name: 'Pikachu',
        type: 'electric',
        imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
      },
      {
        name: 'Bulbasaur',
        type: 'grass',
        imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
      },
      {
        name: 'Charmander',
        type: 'fire',
        imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'
      }
    ];
  }

}

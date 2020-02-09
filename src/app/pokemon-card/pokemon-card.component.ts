import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from './pokemon.model';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  @Input()
  pokemon: Pokemon;

  constructor() { }

  ngOnInit(): void {
  }

}

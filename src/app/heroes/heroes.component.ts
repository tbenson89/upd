import { Component, OnInit } from '@angular/core';
// import { HeroService } from "../services/hero.service";
import { Hero } from "../hero";
import { HEROES } from "../mock-heroes";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 0,
    name: 'The Flash'
  };

  // Declare mockList of HEROES
  heroes = HEROES;

  // when user selects from li's
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  };

  constructor() { }

  ngOnInit() {
  }

}

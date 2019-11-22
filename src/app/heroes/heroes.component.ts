import { Component, OnInit } from '@angular/core';

import { Hero } from "../hero";
import { HeroService } from "../services/hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.getHeroes();
  }

  // Get the Heroes from Service
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  //==================|
  //  CRUD Functions
  //=================|
  // CREATE: Create new Hero
  add(name: string): void {
    name = name.trim();
    if(!name) { return;}
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      })
  }
  // DELETE: Delete Hero
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}

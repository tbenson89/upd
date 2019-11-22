import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'TheFlash'},
      { id: 2, name: 'Dr.Fades'},
      { id: 3, name: 'TylerisCOOL'},
      { id: 4, name: 'Mr.Nice'},
      { id: 5, name: 'ArmVader'},
      { id: 6, name: 'DoctaCore'},
      { id: 7, name: 'SIXHaXX'},
      { id: 8, name: 'RubbDubs'},
      { id: 9, name: 'StatixTrixx'},
      { id: 10, name: 'VariantArrayz'},
    ];
    return {heroes};
  }
  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  // genId(heroes: Hero[]): number {
  //   return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  // }
}


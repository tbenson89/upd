// dependency injection system
import { Injectable } from '@angular/core';
import { MessageService } from "./message.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { catchError, tap } from "rxjs/operators";

import { Hero } from '../hero';
import {error, log} from "util";

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'content-type' : 'application/json'})
  };

  constructor
  ( private http:           HttpClient,
    private messageService: MessageService) { }



  /**
   *  Hero CRUD operations
   * Create Read Update DLT
   */
  // POST: create the hero
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl , hero , this.httpOptions).pipe(
      tap((newHero: Hero) => this.log(`Added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    )
  }

  // GET: queryfind the Hero
  getHeroes (): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log(`fetched heroes`)),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }

  /* GET: HERO by id. will 404 if not found */
  getHeroById(id: number): Observable<Hero[]> {
    if (this.http.request !== null){
      log(error , this.http.request);
      return this.http.get<Hero[]>(this.heroesUrl);
    }
    return error("whoops!");
  }

  // GET: gets a hero by ID param | number
  getHero(id: number): Observable<Hero>{
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  // PUT: Update the Hero
  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`Updated the Hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  // POST: Delete the Hero
  // deleteHero(hero: Hero | number): Observable<Hero> {
  deleteHero(hero: Hero): Observable<Hero> {
    const id  = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;
    alert(`Are you sure you want to delete ${hero.name}?`);

    return this.http.delete<Hero>(url , this.httpOptions).pipe(
      tap(_ => this.log(`Deleted Hero id=${id}`)),
      catchError(this.handleError<Hero>(`deleteHero`))
    );
  }


  /**
   * Handle Http operation that failed
   * Let the app play
   * Log a HeroService message with the MessageService
   *
   * @param message - heroServiceMessages with MessageService
   */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
/**
 * Handle Http operation that failed
 * Let the app play
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation: string, result?: T) {
    return (error: any): Observable<T> => {
      //TODO: Send the err to remote logger
      console.error(error); // log to console instead

      //TODO: User Log Error Catcher
      log(`${operation} failed: ${error.message}`);

      // Let the app run return empty result
      return of (result as T);
    }
  }
}

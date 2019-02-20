import { Injectable } from '@angular/core';

import { Observable,of } from 'rxjs';
import { catchError,tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Hero } from '../class/hero';
import { HEROES } from '../mockdata/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes';

  constructor(
    private http: HttpClient
  ) { }


  getHeroes(): Observable<Hero[]>{
      // return of(HEROES)
      return this.http.get<Hero[]>(this.heroesUrl)
              .pipe(
                // tap(_ => this.log('fetched heroes')),
                tap(_ => console.log('fetched heroes')),
                catchError(this.handleError('operation',[]))
              )
  }

  getHero(id:number): Observable<Hero>{
    const url = `${this.heroesUrl}/${id}`
    return this.http.get<Hero>(url)
            .pipe(
              // tap(_=>console.log(`fetched hero id = ${id}`)),
              catchError(this.handleError<Hero>(`getHero id =${id}`))
            ) 
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.log('--- below is defined error---');
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  update(hero:Hero): Observable<Hero>{
    const url = `${this.heroesUrl}/${hero.id}`
    return  this.http.put<Hero>(url,hero)
              .pipe(
                tap(_=>console.log(`updated hero id =${hero.id}`)),
                catchError(this.handleError<any>('updated hero'))
              )
  }

}

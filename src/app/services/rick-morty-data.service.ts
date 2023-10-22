import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, filter, map, of, tap, from } from 'rxjs';
import { CharacterInfo, CharacterResponse } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class RickMortyDataService {

  data$ = from([
    {
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "location": {
        "name": "Citadel of Ricks",
        "url": "https://rickandmortyapi.com/api/location/3"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    },
    {
      "name": "Alexander",
      "status": "Dead",
      "species": "Human",
      "location": {
        "name": "Anatomy Park",
        "url": "https://rickandmortyapi.com/api/location/5"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/12.jpeg"
    },
    {
      "name": "Ants in my Eyes Johnson",
      "status": "unknown",
      "species": "Human",
      "location": {
        "name": "Interdimensional Cable",
        "url": "https://rickandmortyapi.com/api/location/6"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/20.jpeg"
    }
  ])

  constructor(private _http: HttpClient) { }

  getData(): Observable<CharacterInfo[]> {
    return this._http
      .get<CharacterResponse>('https://rickandmortyapi.com/api/character?page=1')
      .pipe(
        map((res: CharacterResponse) => res?.results),
        catchError((err) => {
          return of([])
        })
      );
  }

  getFilteredData(): Observable<any> {
    return this.data$.pipe(
      filter(character => character.status === 'Alive'),
      tap(x => console.log(x)),
      catchError((err) => {
        return of([])
      })
    )
  }

}

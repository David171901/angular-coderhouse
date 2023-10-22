import { Component, OnInit } from '@angular/core';
import { RickMortyDataService } from './services/rick-morty-data.service';
import { Observable } from 'rxjs';
import { CharacterInfo } from './interfaces/character.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data$!: Observable<CharacterInfo[]>;
  dataFiltered: any;

  constructor(private _rickMortyDataService: RickMortyDataService) { }

  ngOnInit(): void {
    this.data$ = this._rickMortyDataService.getData();
    this.loadDateFiltered();
  }

  loadDateFiltered(): void {
    this._rickMortyDataService.getFilteredData()
      .subscribe((response) => {
        this.dataFiltered = response
      })
  }

  dataUnfiltered: any = [
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
  ]

}
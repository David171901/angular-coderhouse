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

}
import { TestBed } from '@angular/core/testing';

import { RickMortyDataService } from './rick-morty-data.service';

describe('RickMortyDataService', () => {
  let service: RickMortyDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RickMortyDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

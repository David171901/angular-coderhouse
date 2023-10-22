export interface PageInfo {
  count: number;
  pages: number;
  next: string;
  prev?: any;
}

export interface LocationInfo {
  name: string;
  url: string;
}

export interface CharacterInfo {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: LocationInfo;
  location: LocationInfo;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface CharacterResponse {
  info: PageInfo;
  results: CharacterInfo[];
}
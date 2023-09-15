export interface ICountrie {
  id: string;
  name: string;
  img: string[];
  continent: Continent;
  capital: string;
  subregion: null | string;
  area: number;
  population: number;
}

export enum Continent {
  Africa = 'Africa',
  Antarctica = 'Antarctica',
  Asia = 'Asia',
  Europe = 'Europe',
  NorthAmerica = 'North America',
  Oceania = 'Oceania',
  SouthAmerica = 'South America',
}

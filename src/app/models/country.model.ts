export interface Country {
    name: { [key: string]:any};
    flags: Flags;
    population: string;
    region: string;
    capital: string[];
    cca3: string;
  }

  interface Flags {
    png: string;
    svg: string;
    alt: string;
  }


  
  export interface CountryDetails extends Country {

    subregion: string;
    tdl: string;
    currencies: { [key: string]: string };
    languages: { [key: string]: string };
    borders: string[];
    
  }

  export interface CountryDetailsShow extends Country {

    subregion: string;
    tld: string;
    currencies: any[];
    languages: string[];
    borders: string[];
    
  }
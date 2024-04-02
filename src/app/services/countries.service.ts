import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment.development'
import { HttpClient } from '@angular/common/http';
import { Country, CountryDetailsShow } from '../models/country.model';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  httpClient = inject(HttpClient)

  URLbase = environment.URLbase

  constructor() { }

  getAll(fields:string) {
    return this.httpClient.get<Country[]>(`${this.URLbase}/${fields}`);
  }
  
  getbyCode(code: string){
    return this.httpClient.get<CountryDetailsShow[]>(`${this.URLbase}/${code}`);
  }
}

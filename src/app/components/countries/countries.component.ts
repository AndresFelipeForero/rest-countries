import { Component, inject } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../models/country.model';
import { DecimalPipe, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [NgClass, RouterLink, DecimalPipe],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.scss',
})
export class CountriesComponent {
  fields = 'all?fields=flags,name,capital,region,population,cca3';
  _countriesService = inject(CountriesService);
  showString = '';

  continents: string[] = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
  selectedContinent: string = 'Filter by Region'
  showOptions: boolean = false;
  showCountries!: Country[];

  ngOnInit() {
    this._countriesService
      .getAll(this.fields)
      .subscribe((response) => {
        this.showCountries = response
        console.log(this.showCountries)
      });
  }

  toggleOptions(): void {
    this.showOptions = !this.showOptions;
  }

  selectContinent(continent: string): void {
    this.selectedContinent = continent;
    this.showOptions = true;
    console.log('Selected continent:', continent);
  }
}

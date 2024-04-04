import { Component, inject } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../models/country.model';
import { DecimalPipe, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [NgClass, RouterLink, DecimalPipe, FormsModule],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.scss',
})
export class CountriesComponent {
  _countriesService = inject(CountriesService);
  _spinnerService = inject(SpinnerService)
  inputSearch = "";
  fields = 'all?fields=flags,name,capital,region,population,cca3';
  continents: string[] = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
  selectedContinent: string = 'Filter by Region'
  showOptions: boolean = false;
  countriesArray!: Country[];
  showCountries!: Country[];

  ngOnInit() {
    this._countriesService
      .getAll(this.fields)
      .subscribe((response) => {
        this.countriesArray = response
        this.showCountries = this.countriesArray
      });
  }

  toggleOptions(): void {
    this.showOptions = !this.showOptions;
  }

  selectContinent(continent: string): void {
    this.selectedContinent = continent;
    this.showOptions = true;
    this.countriesFilter()
  }

  countriesFilter() {
    if (this.selectedContinent === 'Filter by Region') {
      this.selectedContinent = ''
    }

    this.showCountries = this.countriesArray.filter(({name, region}) =>  name['common'].toLowerCase().includes(this.inputSearch.toLowerCase().trim()) && region.toLowerCase().includes(this.selectedContinent.toLowerCase())
    )
    
    if (this.selectedContinent === '') {
      this.selectedContinent = 'Filter by Region'
    }
  }
}

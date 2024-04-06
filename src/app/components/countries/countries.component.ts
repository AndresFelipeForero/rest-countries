import { Observable, Subscription } from 'rxjs';
import { Component, ElementRef, HostListener, ViewChild, inject } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../models/country.model';
import { AsyncPipe, DecimalPipe, NgClass, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SpinnerService } from '../../services/spinner.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [NgClass, RouterLink, DecimalPipe, FormsModule, NgIf, AsyncPipe],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.scss',
})
export class CountriesComponent {
  @ViewChild('customOptions') optionsContinents!: ElementRef;
  _countriesService = inject(CountriesService);
  _spinnerService = inject(SpinnerService)
  _themeService = inject(ThemeService)
  
  inputSearch = "";
  fields = 'all?fields=flags,name,capital,region,population,cca3';
  continents: string[] = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
  selectedContinent: string = 'Filter by Region'
  showOptions: boolean = false;
  countriesArray!: Country[];
  showCountries: Country[] = [];
  requestError?: string;
  darkTheme$: Observable<boolean> = this._themeService.themeDark;
  suscription$!: Subscription;
  
  ngOnInit() {
    this.suscription$ = this._countriesService
    .getAll(this.fields)
    .subscribe((response) => {
      this.countriesArray = response
      this.showCountries = this.countriesArray
    }, error => this.requestError = error);
  }
  
  toggleOptions(): void {
    this.showOptions = !this.showOptions;
  }
  
  selectContinent(continent: string): void {
    this.selectedContinent = continent;
    this.showOptions = true;
    this.countriesFilter()
  }
  
  @HostListener('document:click', ['$event'])
  closeOptions(event:Event) {
      if (!this.optionsContinents.nativeElement.contains(event.target)) {
        this.showOptions = false
      }
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

  ngOnDestroy(){
    this.suscription$.unsubscribe()
  }
}

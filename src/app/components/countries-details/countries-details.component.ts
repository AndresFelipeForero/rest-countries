import { Component, inject } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CountryDetailsShow } from '../../models/country.model';
import { DecimalPipe, NgFor, NgIf } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-countries-details',
  standalone: true,
  imports: [NgFor, NgIf, DecimalPipe, RouterLink],
  templateUrl: './countries-details.component.html',
  styleUrl: './countries-details.component.scss',
})
export class CountriesDetailsComponent {

  route = inject(Router)
  _countriesService = inject(CountriesService);
  activateRout = inject(ActivatedRoute);
  showCountry!: CountryDetailsShow;
  borders?:any[];
  suscriptionCountry$!: Subscription;
  subscriptionBorder$!:Subscription;

  ngOnInit() {
    this.suscriptionCountry$ = this.activateRout.params.subscribe((param) => {
      this._countriesService
        .getbyCode(`alpha/${param['code']}`)
        .subscribe(([response]) => {
          this.showCountry = this.organizeData(response);

          this.getBordesNames(this.showCountry.borders)
        });
    });
  }

  organizeData(response: CountryDetailsShow) {
    response['languages'] = Object.values(response['languages']);
    response['currencies'] = Object.values(response['currencies']);
    response['name']['nativeName'] = Object.values(
      response['name']['nativeName']
    );
    return response;
  }

  getBordesNames(borders: string[]){
    if (!borders) {
      return
    }
    this.borders = [];
    borders.forEach((border) => {
      this.subscriptionBorder$ = this._countriesService.getbyCode(`alpha/${border}`).subscribe(([response]) => {
        
        this.borders?.push({name: response.name['common'], code: response.cca3}) 
        
      })
    })
  }

  onCLickBack(){
    this.route.navigate(['/countries'])
  }

  ngOnDestroy(){
    if (this.suscriptionCountry$) {
      this.suscriptionCountry$.unsubscribe()
    }
    if (this.subscriptionBorder$) {
      this.subscriptionBorder$.unsubscribe()
    }
  }
}

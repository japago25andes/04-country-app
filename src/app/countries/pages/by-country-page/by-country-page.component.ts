import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  public countries: any[] = [];

  constructor( private countriesServices: CountriesService) { }

  searchByCountry( term: string ): void {
    this.countriesServices.searchCountry( term )
      .subscribe(countries => {
        this.countries = countries;
      })
  }
}

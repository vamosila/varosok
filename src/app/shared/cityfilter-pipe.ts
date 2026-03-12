import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cityfilter'
})
export class CityfilterPipe implements PipeTransform {

  transform(cities: any[], filter: string | null): any {
    if(!cities || !filter) {
      return cities;
    }
    return cities.filter(city => {
      return city.identifier.toLowerCase().includes(filter.toLowerCase());
    }
    );
  }

}

import { Component, inject } from '@angular/core';
import { CityService } from '../shared/city.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CityfilterPipe } from '../shared/cityfilter-pipe';

@Component({
  selector: 'app-city',
  imports: [ReactiveFormsModule, CityfilterPipe],
  templateUrl: './city.component.html',
  styleUrl: './city.component.css',
})
export class CityComponent {
  cityService = inject(CityService);
  filteredCities = this.cityService.getSmartCityDevices();
  cityFilter = new FormControl('');
  
  ngOnInit() {
    console.log(this.cityService.getSmartCityDevices());
  }
}

import { Component, Injector, OnInit, inject } from '@angular/core';
import { HousingService } from 'src/app/housing.service';
import { Housinglocation } from 'src/app/housinglocation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  housingService: HousingService = new HousingService;
  housingLocationList: Housinglocation[] = [];
  filteredLocationList: Housinglocation[] = [];
  
  constructor() { 
    this.housingService.getAllHousingLocations().then((housingLocationList: Housinglocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
    }
  
    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }

  ngOnInit(): void {
  }

}

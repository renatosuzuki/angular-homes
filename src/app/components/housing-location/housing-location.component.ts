import { Component, OnInit, Input } from '@angular/core';
import { Housinglocation } from 'src/app/housinglocation';

@Component({
  selector: 'app-housing-location',
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent implements OnInit {

  @Input() housingLocation!: Housinglocation;

  constructor() { }

  ngOnInit(): void {
  }

}
